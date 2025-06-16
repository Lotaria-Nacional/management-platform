"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCityRepository = void 0;
const city_mapper_1 = require("../mappers/city-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaCityRepository {
    async fetchMany() {
        const citys = await prisma_config_1.prisma.city.findMany({
            orderBy: {
                name: "asc",
            },
            include: {
                areas: true,
            },
        });
        return citys
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((city) => city_mapper_1.CityMapper.toDomain(city));
    }
}
exports.PrismaCityRepository = PrismaCityRepository;
//# sourceMappingURL=prisma-city.repository.js.map