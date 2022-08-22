import Link from "next/link"

export default function Footer() {
    return (
        <div className="container-fluid">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link px-2 text-muted">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/page/about">
                            <a className="nav-link px-2 text-muted">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/page/uses">
                            <a className="nav-link px-2 text-muted">Users</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/page/tags">
                            <a className="nav-link px-2 text-muted">Tags</a>
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2021 codebysamgan.com</p>
            </footer>
        </div>
    )
}
