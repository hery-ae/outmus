import Link from 'next/link'

type HeaderProps = {
    appTitle: string
}

export default function Header({ appTitle }: HeaderProps) {
    return (
        <header className="d-flex justify-content-center py-3" style={{ backgroundColor: '#ff3b00' }}>
            <h1 className="h2 my-0 fw-bold text-white"><Link href="/"><a className="link-light text-decoration-none">{ appTitle }</a></Link></h1>
        </header>
    )
}
