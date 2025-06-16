"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProvinceRepository = void 0;
const province_mapper_1 = require("../mappers/province-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaProvinceRepository {
    async fetchMany() {
        const provinces = await prisma_config_1.prisma.province.findMany({
            orderBy: {
                created_at: "desc",
            },
            include: {
                cities: true,
            },
        });
        return provinces.map((province) => province_mapper_1.ProvinceMapper.toDomain(province));
    }
}
exports.PrismaProvinceRepository = PrismaProvinceRepository;
//# sourceMappingURL=prisma-province.repository.js.map