import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.css"

import { Context } from "../context/index"
import { useEffect, useState } from "react"
import Head from "next/head"
import * as gtag from "../lib/gtag"

import { useRouter } from "next/router"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
    const [postList, setPostList] = useState([])
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on("routeChangeComplete", handleRouteChange)
        router.events.on("hashChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
            router.events.off("hashChangeComplete", handleRouteChange)
        }
    }, [router.events])

    return (
        <Context.Provider
            value={{
                postList,
                setPostList
            }}
        >
            <Head>
                <meta name="author" content="msamgan" />
                <meta name="twitter:site" content="@msamgank"></meta>
                <meta name="og:site_name" content="Code By Samgan"></meta>
                <meta name="og:type" content="website"></meta>
                <meta name="og:locale" content="en_US"></meta>
                <Favicons />
            </Head>

            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4235318980971035"
                crossorigin="anonymous"
            ></Script>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `
                }}
            />

            <Component {...pageProps} />
        </Context.Provider>
    )
}

/**
 * A component that renders the favicons.
 * @returns None
 */
export function Favicons() {
    return (
        <>
            <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/manifest.json" />
        </>
    )
}

export default MyApp
