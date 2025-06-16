"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTransactionManager = void 0;
const prisma_config_1 = require("../infra/database/prisma/prisma.config");
class PrismaTransactionManager {
    async runInTransaction(fn) {
        return prisma_config_1.prisma.$transaction(async (tx) => {
            return await fn(tx);
        });
    }
}
exports.PrismaTransactionManager = PrismaTransactionManager;
//# sourceMappingURL=prisma-transaction-manager.js.map