import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    const url = `${process.env.API_URL}/user`

    const apiRes = await fetch(url, {
        headers: { Authorization: process.env.API_TOKEN },
        method: 'POST',
        body: `{\"email\": \"${req.body.email}\", \"password\": \"${req.body.password}\"}`,
    })

    const user = await apiRes.json()

    if (user.plain_text_token) {
        res.setHeader('Set-Cookie', `plain_text_token=${user.plain_text_token}; Path=/; HttpOnly`)
    }

    res.redirect(307, '/account')

}
