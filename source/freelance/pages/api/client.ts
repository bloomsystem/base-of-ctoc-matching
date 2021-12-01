import { PrismaClient } from '@prisma/client'

// Tips: https://qiita.com/Gma_Gama/items/5b637f746b8df62fcc62

declare global {
    var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient({
        log: ["error"]
    })
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient({
            log: ["query", "error", "info", "warn"]
        })
    }
    prisma = global.prisma
}

export default prisma