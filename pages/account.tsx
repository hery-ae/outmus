import Link from "next/dist/client/link"

export default function Page({ account }) {
    if (account) {
        return (
            <div  style={{ height: 'calc(100vh - 115px - 90px)' }}>
                <div className="row mb-3">
                    <div className="col-8">
                        <h3>{ account.name }</h3>
                    </div>
                    <div className="col-4 text-end">
                        <button className="btn btn-outline-danger">
                            <Link href="/api/sign-out">
                                <a className="link-body-emphasis text-decoration-none">Sign out</a>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row mb-2">
                            <div className="col">
                                <h5>Pesanan</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nama Produk</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            account.orders.length > 0 ? (
                                                account.orders.map(( order: { id: number, product: { title: string }, status: string }, key: number ) => (
                                                    <tr key={ order.id }>
                                                        <td>{ key + 1 }</td>
                                                        <td>{ order.product.title }</td>
                                                        <td>{ order.status }</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={ 3 } className="text-center">No order</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="row justify-content-center" style={{ height: 'calc(100vh - 115px - 90px)' }}>
            <div className="col-7">
                <div className="row mb-2">
                    <h4>Please sign in</h4>
                </div>
                <div className="row">
                    <form action="/api/sign-in" method="post">
                        <input type="email" name="email" className="form-control mb-2" placeholder="E-mail" />
                        <input type="password" name="password" className="form-control mb-2" placeholder="Password" />
                        <button className="btn btn-primary w-100 my-4" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ req }) {
    let account = null

    if (req.cookies && req.cookies.plain_text_token) {
        const url = `${process.env.API_URL}/account`

        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${req.cookies.plain_text_token}` }
        })

        account = await res.json()
    }

    return {
        props: {
            account,
        }
    }
}
