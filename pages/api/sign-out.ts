import { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
    res.setHeader('Set-Cookie', `plain_text_token=; Path=/; HttpOnly`)

    res.redirect(307, '/account')

}
