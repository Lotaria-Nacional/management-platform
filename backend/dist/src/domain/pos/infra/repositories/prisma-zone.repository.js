"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaZoneRepository = void 0;
const zone_mapper_1 = require("../mappers/zone-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaZoneRepository {
    async fetchMany() {
        const zones = await prisma_config_1.prisma.zone.findMany({
            orderBy: {
                value: "asc",
            },
            include: {
                area: true,
                agents: true
            },
        });
        return zones.sort((a, b) => a.value - b.value)
            .map((zone) => zone_mapper_1.ZoneMapper.toDomain(zone));
    }
}
exports.PrismaZoneRepository = PrismaZoneRepository;
//# sourceMappingURL=prisma-zone.repository.js.map