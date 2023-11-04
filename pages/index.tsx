import Link from "next/dist/client/link"

export default function Page({ products }) {
    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <img src={ products.highlight_image } alt="highlight" className="img-fluid" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <h3>Kategori Populer</h3>
                    <div className="row justify-content-start">
                        {
                            products.categories.map((category: { id: number, image: string, title: string }) => (
                                <div key={ category.id } className="col-auto col-md-6 col-lg-4">
                                    <div className="card">
                                        <img src={ category.image } className="card-img-top" alt={ category.title } />
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
                    products.data.map((product: { id: number, image: string, title: string, price: string, category: { name: string } }) => (
                        <div key={ product.id } className="col-auto">
                            <div className="card">
                                <img src={ product.image } className="card-img-top" alt={ product.title } />
                                <div className="card-body">
                                    <Link href={ `/${product.category.name}/${product.id}` }>
                                        <a className="link-dark text-decoration-none">
                                            <h5 className="card-title">{ product.title }</h5>
                                            <p className="card-text">{ product.price }</p>
                                        </a>
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
        headers: { Authorization: process.env.API_TOKEN }
    })

    const products = await res.json()

    return {
        props: {
            products,
        }
    }
}
