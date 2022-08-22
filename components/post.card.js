import Link from "next/link"
import { dateFormat, readingTime } from "../utils/methods"
import Tags from "./tags"

export default function PostCard({ post }) {
    return (
        <div className="">
            <div className="card shadow-lg rounded mt-3">
                <div className="card-body">
                    <div className="card-text">
                        <Tags tags={post.Tags}></Tags>
                        <h2 className="post-cart-title">
                            <Link href={`/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p>{post.excerpt}</p>
                        <span className="text-muted">Reading Time: {readingTime(post.body)} minutes</span>
                        {" | "}
                        <span className="text-muted">{dateFormat(post.updated_at)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
