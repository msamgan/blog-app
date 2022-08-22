import { useContext, useEffect, useState } from "react"
import { Context } from "../context"

export default function Search() {
    const [search, setSearch] = useState("")
    const { setPostList } = useContext(Context)

    /**
     * A React Hook that filters the post list based on the search string.
     * @param {string} search - The search string.
     * @returns None
     */
    useEffect(() => {
        let allPosts = JSON.parse(localStorage.getItem("postList"))

        if (search.length <= 0) {
            setPostList(allPosts)

            return
        }

        setPostList(
            allPosts.filter((post) => {
                return post.title.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search])

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-8 mx-auto">
                    <div className="input-group">
                        <input
                            className="form-control border"
                            type="search"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            id="search-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
