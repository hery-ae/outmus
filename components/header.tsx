import Link from 'next/link'

type HeaderProps = {
    appTitle: string
}

export default function Header({ appTitle }: HeaderProps) {
    return (
        <header className="d-flex justify-content-center py-3" style={{ backgroundColor: 'orange' }}>
            <h1 className="h2 my-0 fw-bold">{ appTitle }</h1>
        </header>
    )
}
