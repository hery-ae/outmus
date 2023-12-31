import { PropsWithChildren, ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from './../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const appTitle = 'OutMus'

    const getLayout = Component.getLayout ?? ((page) => {
        return (
            <Layout appTitle={ appTitle }>{ page }</Layout>
        )
    })
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])

    return getLayout(<Component {...pageProps} />)
}
