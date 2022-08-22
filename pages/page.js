import Layout from "../components/layout"
import Separator from "../components/separator"

export default function Page() {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-8 col-sm-12 mx-auto">
                        <h1 className="">About</h1>
                        <Separator />
                        <p>Hi, I am samgan a developer from INDIA</p>

                        <p>
                            Talking about me, I excel at solving complex problems involving logic and step by
                            step breakdown of the problem. In addition, to develop complex algorithms, I
                            specialize in problem framing, systems design, and product development strategy.
                            Sometimes I also enjoy public speaking.
                        </p>

                        <p>
                            I am also the creator of penit.ink, a site which provides young writers with a free
                            hand place to show their creation to the world. Irrespective of the niche, if you
                            write this place is defiantly for you.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
