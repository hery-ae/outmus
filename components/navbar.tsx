import Link from 'next/link'
import { useRouter } from 'next/router'

const links: Array<{ text: string, path: string }> = [
    { text: 'Akun', path: '/account' },
    { text: 'Keranjang', path: '/cart' },
]

export default function Navbar() {
    return (
        <nav className="position-relative overflow-y-hidden text-nowrap bg-body-tertiary" style={{ height: '42px' }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <ul className="nav nav-underline justify-content-start">
                            {
                                links.map((value, index) => (
                                    (value.path === useRouter().pathname) ? (
                                        <li key={ index } className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link link-body-emphasis px-1 pb-3 fw-bold active" aria-current="page">{ value.text }</a>
                                            </Link>
                                        </li>
                                    ) : (
                                        <li key={ index } className="nav-item">
                                            <Link href={ value.path }>
                                                <a className="nav-link link-body-emphasis px-1 pb-3 fw-bold">{ value.text }</a>
                                            </Link>
                                        </li>
                                    )
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-4 text-end">
                        <Link href="#">
                            <a className="link-secondary" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width={ 24 } height={ 24 } fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } className="m-2" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx={ 10.5 } cy={ 10.5 } r={ 7.5 }/><path d="M21 21l-5.2-5.2" /></svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
