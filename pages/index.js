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
