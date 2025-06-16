"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTypeRepository = void 0;
const type_mapper_1 = require("../mappers/type-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaTypeRepository {
    async fetchMany() {
        const types = await prisma_config_1.prisma.type.findMany({
            orderBy: {
                created_at: "asc",
            },
            include: {
                subtypes: true,
            },
        });
        return types
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((type) => type_mapper_1.TypeMapper.toDomain(type));
    }
}
exports.PrismaTypeRepository = PrismaTypeRepository;
//# sourceMappingURL=prisma-type.repository.js.map