import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    const url = `${process.env.API_URL}/cart`

    if (req.cookies && req.cookies.plain_text_token) {
        await fetch(url, {
            headers: { Authorization: `Bearer ${req.cookies.plain_text_token}` },
            method: 'POST',
            body: `{\"product-id\": \"${req.body['product-id']}\", \"qty\": \"${req.body.qty}\"}`,
        })
    }

    res.redirect(307, '/cart')

}
