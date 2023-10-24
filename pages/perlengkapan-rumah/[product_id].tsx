import Link from "next/dist/client/link"

export default function Page({ product }) {
    return (
        <>
            <div className="row mb-3">
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
