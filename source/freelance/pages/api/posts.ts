import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import prisma from './client'

type Data = {
    postType: string;
    rewardType: string;
    amount: string;
    title: string;
    body: string;
    isMember: boolean;
    selectedLang: string;
    selectedTool: string;
    startDate: Date;
    endDate: Date;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
        if (req.method === "GET") {

            let posts = {};
    
            posts = await prisma.post.findMany({
                where: {
                    isMember: false
                },
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    User: true
                },
            })
            .catch((e) => {
                throw e
            })

            return res.status(200).json(posts);
        }
    } else {

        const userId = session.user.id;

        if (req.method === "GET") {

            let posts = {};

            if (!session) {
                posts = await prisma.post.findMany({
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        User: true
                    },
                });
            } else {
                posts = await prisma.post.findMany({
                    orderBy: {
                        createdAt: "desc",
                    },
                    include: {
                        User: true
                    },
                })
                .catch((e) => {
                    throw e
                })
            }
            return res.status(200).json(posts);
        }

        if (req.method === "POST") {
            const { postType, rewardType, amount, title, body, isMember, selectedLang, selectedTool, startDate, endDate } = JSON.parse(req.body) as Data;
            const createdPost = await prisma.post.create({
                data: {
                    postType,
                    rewardType,
                    amount,
                    title,
                    body,
                    userId: userId,
                    isMember,
                    selectedLang,
                    selectedTool,
                    startDate,
                    endDate,
                },
            })
            .catch((e) => {
                throw e
            })
            res.status(201).json(createdPost);
        }
    }
};