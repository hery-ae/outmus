import Link from 'next/link'
import { useRouter } from 'next/router'

const links: Array<{ text: string, path: string }> = [
    { text: 'Home', path: '/' },
    { text: 'Account', path: '/account' },
]

export default function Navbar() {
    return (
        <nav className={ 'position-relative overflow-y-hidden text-nowrap bg-body-tertiary' } style={{ height: '42px' }}>
            <ul className={ 'nav nav-underline justify-content-between flex-nowrap overflow-x-auto' }>
                {
                    links.map((value, index) => (
                        (value.path === useRouter().pathname) ? (
                            <li key={ index } className={ 'nav-item' }>
                                <Link href={ '#' }>
                                    <a className={ 'nav-link link-body-emphasis px-1 pb-3 active' } aria-current={ 'page' }>{ value.text }</a>
                                </Link>
                            </li>
                        ) : (
                            <li key={ index } className={ 'nav-item' }>
                                <Link href={ value.path }>
                                    <a className={ 'nav-link link-body-emphasis px-1 pb-3' }>{ value.text }</a>
                                </Link>
                            </li>
                        )
                    ))
                }
          </ul>
        </nav>
    )
}
