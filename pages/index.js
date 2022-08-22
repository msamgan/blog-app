import Head from "next/head"
import { useContext, useEffect } from "react"
import Introduction from "../components/introduction"
import Layout from "../components/layout"
import PostList from "../components/post.list"
import Search from "../components/search"
import Separator from "../components/separator"
import { Context } from "../context"

export default function Home({ posts }) {
    const { setPostList } = useContext(Context)

    /**
     * This function is called when the component is mounted.
     * It sets the postList state to the posts in the local storage.
     * @returns None
     */
    useEffect(() => {
        localStorage.setItem("postList", JSON.stringify(posts))
        setPostList(posts)
    }, [])

    return (
        <Layout>
            <HomeHead />
            <Search></Search>
            <Introduction />
            <Separator />
            <div className="posts">
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-md-8 col-sm-12 mx-auto">
                            <PostList />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

/**
 * A React component that renders the head of the home page.
 * @returns A React component that renders the head of the home page.
 */
export function HomeHead() {
    return (
        <Head>
            <title>{`${process.env.APP_NAME} - Home`}</title>
            <meta
                name="description"
                content="samgan's experience in the field of web and application development including but not limited to php, node, python and mysql etc."
            ></meta>
        </Head>
    )
}

/**
 * Fetches the posts from the API and returns them as props.
 * @returns {Promise<{props: {posts: Post[]}}>}
 */
export async function getServerSideProps() {
    return {
        props: {
            posts: (await (await fetch(`${process.env.API_BASE_URL}v1/posts`)).json()).package
        }
    }
}
