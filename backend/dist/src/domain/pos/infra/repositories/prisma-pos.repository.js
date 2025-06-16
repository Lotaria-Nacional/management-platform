"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPosRepository = void 0;
const pos_mapper_1 = require("../mappers/pos-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
const licence_enums_1 = require("../../enterprise/enums/licence.enums");
class PrismaPosRepository {
    async create(pos) {
        await prisma_config_1.prisma.$transaction(async (tx) => {
            await tx.pos.create({
                data: pos_mapper_1.PosMapper.toPrisma(pos),
            });
        });
    }
    async fetchMany({ limit = 10, page = 0, area_id, zone_id, city_id, province_id, type_id, }) {
        const where = {
            ...(area_id && { area_id }),
            ...(zone_id && { zone_id }),
            ...(city_id && { city_id }),
            ...(province_id && { province_id }),
            ...(type_id && { type_id }),
        };
        const posList = await prisma_config_1.prisma.pos.findMany({
            skip: page,
            take: limit,
            orderBy: {
                id_reference: "asc",
            },
            where,
            include: {
                area: true,
                zone: true,
                city: true,
                province: true,
                type: true,
                subtype: true,
                licence: true,
                administration: true,
                agent: true,
            },
        });
        return posList.map((pos) => pos_mapper_1.PosMapper.toDomain(pos));
    }
    async getById(id) {
        const pos = await prisma_config_1.prisma.pos.findUnique({
            where: { id },
            include: {
                type: true,
                city: true,
                zone: true,
                area: true,
                agent: true,
                subtype: true,
                licence: true,
                province: true,
                administration: true,
            },
        });
        if (!pos)
            return null;
        return pos_mapper_1.PosMapper.toDomain(pos);
    }
    async save(pos) {
        await prisma_config_1.prisma.$transaction(async (tx) => {
            const oldPos = await tx.pos.findUnique({
                where: { id: pos.id },
                select: { licence_id: true },
            });
            const newData = pos_mapper_1.PosMapper.toPrisma(pos);
            await tx.pos.update({
                where: { id: pos.id },
                data: newData,
            });
            const newLicenceId = pos.toJSON().licence_id;
            const oldLicenceId = oldPos?.licence_id;
            // Se conectou uma nova licença, atualiza status dela para USED
            if (newLicenceId) {
                await tx.licence.update({
                    where: { id: newLicenceId },
                    data: { status: licence_enums_1.LicenceStatusEnum.USED },
                });
            }
            // Se removeu a licença antiga, atualiza status dela para NOT_USED
            if (!newLicenceId && oldLicenceId) {
                await tx.licence.update({
                    where: { id: oldLicenceId },
                    data: { status: licence_enums_1.LicenceStatusEnum.NOT_USED },
                });
            }
        });
    }
    async delete(id) {
        await prisma_config_1.prisma.pos.delete({
            where: { id },
        });
    }
    async countAll(params) {
        return await prisma_config_1.prisma.pos.count({
            where: {
                ...params,
            },
        });
    }
}
exports.PrismaPosRepository = PrismaPosRepository;
//# sourceMappingURL=prisma-pos.repository.js.map