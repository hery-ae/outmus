import Link from "next/dist/client/link"

export default function Page({ products }) {
    return (
        <>
            <div className="row mb-3">
                {
                    products.data.map((product: { id: number, image: string, title: string, price: string, category: { name: string } }) => (
                        <div key={ product.id } className="col-auto">
                            <div className="card">
                                <img src={ product.image } className="card-img-top" width={ 225 } height={ 225*(623/685) } alt={ product.title } />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link href={ `/perlengkapan-rumah/${ product.id }` }>
                                            <a className="link-body-emphasis text-decoration-none">{ product.title }</a>
                                        </Link>
                                    </h5>
                                    <p className="card-text">{ product.price }</p>
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
    const url = `${process.env.API_URL}/products?category_name=perlengkapan-rumah`

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
