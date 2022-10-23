import Head from "next/head"
import Image from "next/image"
import { useContext, useEffect } from "react"
import Layout from "../components/layout"
import PostList from "../components/post.list"
import Separator from "../components/separator"
import Tags from "../components/tags"
import { Context } from "../context"
import { dateFormat, slugify, stripHTML } from "../utils/methods"
import hljs from "highlight.js"
import javascript from "highlight.js/lib/languages/javascript"
import "highlight.js/styles/github.css"

export default function Post({ post, headings, posts }) {
    const { setPostList } = useContext(Context)

    /**
     * Sets the postList state to the posts array.
     * @param {Post[]} posts - the array of posts to set the postList state to.
     * @returns None
     */
    useEffect(() => {
        setPostList(posts)
        hljs.registerLanguage("javascript", javascript)
    }, [])

    return (
        <Layout>
            <Head>
                <title>{`${process.env.APP_NAME} - ${post.title}`}</title>
                <meta name="description" content={post.meta.meta_description}></meta>
                <meta name="twitter:title" content={post.meta.twitter_title} />
                <meta name="og:title" content={post.meta.opengraph_title} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={post.meta.twitter_description} />
                <meta
                    name="twitter:image"
                    content={`${process.env.BACKEND_BASE_URL}${post.meta.twitter_image}`}
                />
                <meta
                    name="og:image"
                    content={`${process.env.BACKEND_BASE_URL}${post.meta.opengraph_image}`}
                ></meta>
            </Head>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-8 col-sm-12 mx-auto">
                        {post.featured_image && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                            >
                                <Image
                                    src={`${process.env.BACKEND_BASE_URL}${post.featured_image}`}
                                    alt="post"
                                    width={800}
                                    height={400}
                                />
                            </div>
                        )}
                        <Tags tags={post.Tags} />
                        <h1>{post.title}</h1>
                        <p>
                            {dateFormat(post.updated_at)} {/* | {post.page_view} views */}
                        </p>
                        <Separator />
                        <div className="row">
                            {headings && (
                                <>
                                    <div className="col-md-4">
                                        <div
                                            style={{
                                                position: "sticky",
                                                top: 20
                                            }}
                                        >
                                            <h2>Table of Content</h2>
                                            <ol>
                                                {headings.map((heading, index) => (
                                                    <li key={heading}>
                                                        <a
                                                            className="tbc-link"
                                                            href={`#${slugify(stripHTML(heading))}`}
                                                            dangerouslySetInnerHTML={{
                                                                __html: heading
                                                            }}
                                                        ></a>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </>
                            )}
                            <div
                                className={headings ? "col-md-8" : "col-md-12"}
                                dangerouslySetInnerHTML={{ __html: post.body }}
                            ></div>
                        </div>
                        <Separator />
                        <PostList></PostList>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

/**
 * Gets the post data from the API and returns it as props.
 * @param {object} context - the context object from Next.js
 * @returns {object} - the props object containing the post data
 */
export async function getServerSideProps(context) {
    let post = (
        await (await fetch(`${process.env.API_BASE_URL}v1/posts/post/${context.params.postSlug}`)).json()
    ).package

    if (post === undefined) {
        return {
            notFound: true
        }
    }

    let headings = post.body.match(/<h2>(.*?)<\/h2>/g)

    let tagsSlugArray = post.Tags.map((tag) => tag.slug)

    let posts = (
        await (await fetch(`${process.env.API_BASE_URL}v1/posts/tags?tags=${tagsSlugArray.join(",")}`)).json()
    ).package

    return {
        props: {
            post: post,
            headings: headings,
            posts: posts
        }
    }
}
