import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.css"

import { Context } from "../context/index"
import { useState } from "react"

function MyApp({ Component, pageProps }) {
    const [postList, setPostList] = useState([])

    return (
        <Context.Provider
            value={{
                postList,
                setPostList
            }}
        >
            <Component {...pageProps} />
        </Context.Provider>
    )
}

export default MyApp
