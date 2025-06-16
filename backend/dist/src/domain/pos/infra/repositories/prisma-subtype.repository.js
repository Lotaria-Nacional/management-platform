"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaSubtypeRepository = void 0;
const subtype_mapper_1 = require("../mappers/subtype-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaSubtypeRepository {
    async fetchMany() {
        const subtypes = await prisma_config_1.prisma.subtype.findMany({
            orderBy: {
                created_at: "desc",
            },
            include: {
                type: true,
            },
        });
        return subtypes.map((subtype) => subtype_mapper_1.SubtypeMapper.toDomain(subtype));
    }
}
exports.PrismaSubtypeRepository = PrismaSubtypeRepository;
//# sourceMappingURL=prisma-subtype.repository.js.map