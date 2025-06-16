"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAreaRepository = void 0;
const area_mapper_1 = require("../mappers/area-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaAreaRepository {
    async fetchMany() {
        const areas = await prisma_config_1.prisma.area.findMany({
            orderBy: {
                name: "asc",
            },
            include: {
                zones: true,
            },
        });
        return areas
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((area) => area_mapper_1.AreaMapper.toDomain(area));
    }
}
exports.PrismaAreaRepository = PrismaAreaRepository;
//# sourceMappingURL=prisma-area.repository.js.map