import Link from "next/link"

export default function Tags({ tags }) {
    return (
        <p className="tags">
            {tags.map((tag, index) => (
                <Link key={tag.slug} href={`/tag/${tag.slug}`}>
                    <a className={index >= 1 ? "ms-2" : ""}>#{tag.name}</a>
                </Link>
            ))}
        </p>
    )
}
