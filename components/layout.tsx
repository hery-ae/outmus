import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

type LayoutProps = {
    children: ReactNode,
    appTitle: string,
}

export default function Layout({ children, appTitle }: LayoutProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{ appTitle }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header appTitle={ appTitle } />
            <Navbar />
            <main className="container-fluid mt-3 mb-5">{ children }</main>
            <Footer appTitle={ appTitle } />
        </>
    )
}
