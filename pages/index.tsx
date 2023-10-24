import Link from "next/dist/client/link"

export default function Page({ products }) {
    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <img src={ `${process.env.API_URL}/images/highlight.jpg` } alt="highlight" className="img-fluid" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <h3>Kategori Populer</h3>
                    <div className="row justify-content-between">
                        {
                            products.categories.map((category: { image: string, title: string }) => (
                                <div className="col-auto col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={ category.image } className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{ category.title }</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                {
                    products.data.map((product: { id: number, image: string, title: string, price: string, category: string }) => (
                        <div className="col-auto">
                            <div className="card">
                                <img src={ product.image } className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <Link href={ `${process.env.API_URL}/${product.category}/${product.id}` }>
                                        <h5 className="card-title">{ product.title }</h5>
                                        <p className="card-text">{ product.price }</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/products`

    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` }
    })

    const products = await res.json()

    return {
        props: {
            products,
        }
    }
}
