"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.startPrismaConnection = startPrismaConnection;
const prisma_1 = require("generated/prisma");
exports.prisma = new prisma_1.PrismaClient({
    log: ["error"],
});
async function startPrismaConnection() {
    try {
        await exports.prisma.$connect();
        console.log("DATABASE CONNECTED SUCCESSFULY");
    }
    catch (error) {
        await exports.prisma.$disconnect();
        console.log("ERROR CONNECTING DATABASE: ", error);
        throw error;
    }
}
//# sourceMappingURL=prisma.config.js.map