import Link from "next/dist/client/link"

export default function Page({ product }) {
    return (
        <>
            <div className="row mb-3 justify-content-center">
                <div className="col-auto">
                    <div className="card">
                        <img src={ product.image } className="card-img-top" width={ 355 } height={ 355*(623/685) } alt={ product.title } />
                        <div className="card-body">
                            <h5 className="card-title">{ product.title }</h5>
                            <p className="card-text">{ product.price }</p>
                            <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#buy-modal">BELI</button>
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#cart-modal">TAMBAH KERANJANG</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="buy-modal" className="modal" tabIndex={ -1 }>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form action="/api/buy" method="post">
                            <div className="modal-header">
                                <h5 className="modal-title">BELI</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" name="product-id" value={ product.id } />
                                <input type="number" name="qty" placeholder="Qty" className="form-control mb-3" required />
                                <textarea name="address" rows={ 3 } placeholder="Address" className="form-control"></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="cart-modal" className="modal" tabIndex={ -1 }>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form action="/api/cart" method="post">
                            <div className="modal-header">
                                <h5 className="modal-title">TAMBAH KERANJANG</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="hidden" name="product-id" value={ product.id } />
                                <input type="number" name="qty" placeholder="Qty" className="form-control" required />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ params }) {
    const url = `${process.env.API_URL}/products/${params.product_id}`

    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    })

    const product = await res.json()

    return {
        props: {
            product,
        }
    }
}
