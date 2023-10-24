import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="mw-100 mx-auto" style={{ width: '960px' }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
