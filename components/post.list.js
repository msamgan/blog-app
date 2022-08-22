import PostCard from "./post.card"
import { Context } from "../context"
import { useContext } from "react"

function PostList() {
    const { postList } = useContext(Context)

    return (
        <>
            {postList.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </>
    )
}

export default PostList
