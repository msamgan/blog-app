import Link from "next/link"

export default function Footer() {
    return (
        <div className="container-fluid">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link href="/" className="nav-link px-2 text-muted">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/page/about" className="nav-link px-2 text-muted">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/page/uses" className="nav-link px-2 text-muted">
                            Users
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/page/tags" className="nav-link px-2 text-muted">
                            Tags
                        </Link>
                    </li>
                </ul>
                <p className="text-center text-muted">© 2021 codebysamgan.com</p>
            </footer>
        </div>
    )
}
