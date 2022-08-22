import Head from "next/head"
import Layout from "../../components/layout"
import Separator from "../../components/separator"

export default function Page({ page }) {
    return (
        <Layout>
            <Head>
                <title>{`${process.env.APP_NAME} - ${page.title}`}</title>
                <meta name="description" content={page.meta.meta_description}></meta>
            </Head>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-6 col-sm-12 mx-auto">
                        <h1 className="">{page.title}</h1>
                        <Separator />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: page.body
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

/**
 * Gets the page data from the API.
 * @param {object} context - The context object from Next.js.
 * @returns {object} The page data.
 */
export async function getServerSideProps(context) {
    let page = (await (await fetch(`${process.env.API_BASE_URL}v1/pages/${context.params.pageSlug}`)).json())
        .package

    if (page === undefined) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            page
        }
    }
}
