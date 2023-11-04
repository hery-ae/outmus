import Link from 'next/link'
import { useRouter } from 'next/router'

type FooterProps = {
    appTitle: string
}

const links: Array<{ text: string, path: string }> = [
    { text: 'Privacy', path: '/privacy' },
    { text: 'Terms', path: '/terms' },
    { text: 'About', path: '/about' },
]

export default function Footer({ appTitle }: FooterProps) {
    return (
        <footer className={ 'py-1 bg-body-tertiary position-relative' }>
            <ul className={ 'nav justify-content-center border-bottom pb-1' }>
                {
                    links.map((value, index) => (
                        (value.path === useRouter().pathname) ? (
                            <li key={ index } className={ 'nav-item' }>
                                <Link href={ '#' }>
                                    <a className={ 'nav-link px-2 text-body-tertiary' } aria-current={ 'page' }>{ value.text }</a>
                                </Link>
                            </li>
                        ) : (
                            <li key={ index } className={ 'nav-item' }>
                                <Link href={ value.path }>
                                    <a className={ 'nav-link px-2 text-body-secondary' }>{ value.text }</a>
                                </Link>
                            </li>
                        )
                    ))
                }
            </ul>
            <p className={ 'text-center text-body-tertiary my-2 small' }>&copy; { `2019 ${appTitle}` }</p>
        </footer>
    )
}
