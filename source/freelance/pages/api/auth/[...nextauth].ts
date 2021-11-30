import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import Adapters from "next-auth/adapters";
import prisma from '../client'

export default NextAuth({
    // 1つ以上の認証プロバイダーを構成
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Providers.Discord({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET,
        }),
    ],
    adapter: Adapters.Prisma.Adapter({ prisma }),
    callbacks: {
        session: async (session, user) => {
        session.user.id = user.id;
        return Promise.resolve(session);
        },
    },
})