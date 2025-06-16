"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaLicenceRepository = void 0;
const licence_mapper_1 = require("../mappers/licence-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaLicenceRepository {
    async create(licence) {
        try {
            await prisma_config_1.prisma.$transaction(async (tx) => {
                await tx.licence.create({
                    data: licence_mapper_1.LicenceMapper.toPrisma(licence)
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async save(licence) {
        try {
            await prisma_config_1.prisma.$transaction(async (tx) => {
                await tx.licence.update({
                    where: { id: licence.id },
                    data: licence_mapper_1.LicenceMapper.toPrisma(licence)
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async delete(id) {
        try {
            await prisma_config_1.prisma.licence.delete({
                where: { id }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getById(id) {
        const licence = await prisma_config_1.prisma.licence.findUnique({
            where: { id },
            include: {
                pos: true,
                administration: true
            }
        });
        if (!licence) {
            return null;
        }
        return licence_mapper_1.LicenceMapper.toDomain(licence);
    }
    async fetchMany({ limit, page }) {
        const licences = await prisma_config_1.prisma.licence.findMany({
            skip: page,
            take: limit,
            orderBy: {
                created_at: "desc",
            },
            include: {
                administration: true,
                pos: true,
            },
        });
        return licences.map((licence) => licence_mapper_1.LicenceMapper.toDomain(licence));
    }
    async countAll() {
        return await prisma_config_1.prisma.licence.count();
    }
}
exports.PrismaLicenceRepository = PrismaLicenceRepository;
//# sourceMappingURL=prisma-licence.repository.js.map