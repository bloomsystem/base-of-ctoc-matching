import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import prisma from './client'

type Data = {
    title: string;
    body: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });
    if (!session) return res.status(401).end("Please log in to view");
    const userId = session.user.id;

    if (req.method === "GET") {
        const notifications = await prisma.notification.findMany({
        orderBy: {
            createdAt: "desc",
        },
        where: {
            userId,
        },
        })
        .catch((e) => {
            throw e
        })
        return res.status(200).json(notifications);
    }

    if (req.method === "POST") {
        const { title, body } = JSON.parse(req.body) as Data;
        const createdTodo = await prisma.notification.create({
        data: {
            title,
            body,
            userId: userId,
        },
        })
        .catch((e) => {
            throw e
        })
        res.status(201).json(createdTodo);
    }
};