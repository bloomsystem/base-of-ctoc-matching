import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import prisma from '../client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401).end("Please log in to view");

    const postId = Number(req.query.id)

    if (req.method === "GET") {

        let post = null;

        post = await prisma.post.findFirst({
            where: {
                id: postId
            },
            include: {
                User: true
            },
        })
        .catch((e) => {
            throw e
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
        return res.status(200).json(post);
    }
};