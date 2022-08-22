import Link from "next/link"

export default function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 mx-auto site-title">
                    <Link href="/">{`Samgan's Grimoire`}</Link>
                </span>
            </div>
        </nav>
    )
}
