import Link from "next/dist/client/link"

export default function Page({ cart }) {
    if (cart) {
        return (
            <div  style={{ height: 'calc(100vh - 115px - 90px)' }}>
                <div className="row mb-3">
                    <div className="col">
                        <h3>Keranjang Saya</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama Produk</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.items.length > 0 ? (
                                        cart.items.map(( item: { id: number, product: { title: string }, qty: string }, key: number ) => (
                                            <tr key={ item.id }>
                                                <td>{ key + 1 }</td>
                                                <td>{ item.product.title }</td>
                                                <td>{ item.qty }</td>
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
    let cart = null

    if (req.cookies && req.cookies.plain_text_token) {
        const url = `${process.env.API_URL}/cart`

        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${req.cookies.plain_text_token}` }
        })

        cart = await res.json()
    }

    return {
        props: {
            cart,
        }
    }
}
