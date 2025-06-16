"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNextSequence = generateNextSequence;
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
async function generateNextSequence(name) {
    const updated = await prisma_config_1.prisma.idCounter.update({
        where: { name },
        data: {
            value: { increment: 1 },
        },
    });
    return updated.value;
}
//# sourceMappingURL=generate-next-sequence.js.map