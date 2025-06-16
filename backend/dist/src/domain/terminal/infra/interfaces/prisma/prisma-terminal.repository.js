"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTerminalRepository = void 0;
const terminal_mapper_1 = require("../../mappers/terminal-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaTerminalRepository {
    async create(terminal) {
        try {
            await prisma_config_1.prisma.$transaction(async (tx) => {
                await tx.terminal.create({
                    data: terminal_mapper_1.TerminalMapper.toPersistence(terminal),
                });
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async save(terminal) {
        try {
            await prisma_config_1.prisma.$transaction(async (tx) => {
                await tx.terminal.update({
                    where: { id: terminal.id },
                    include: {
                        area: true,
                        city: true,
                        zone: true,
                        agent: true,
                        province: true,
                    },
                    data: terminal_mapper_1.TerminalMapper.toPersistence(terminal),
                });
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async delete(id) {
        try {
            await prisma_config_1.prisma.terminal.delete({ where: { id } });
        }
        catch (error) {
            console.error(error);
        }
    }
    async getById(id) {
        const terminal = await prisma_config_1.prisma.terminal.findUnique({
            where: { id: id },
            include: {
                agent: {
                    include: {
                        area: true,
                        zone: true,
                        type: true,
                    },
                },
            },
        });
        if (!terminal)
            return null;
        return terminal_mapper_1.TerminalMapper.toDomain(terminal);
    }
    async fetchMany({ limit = 10, page = 0, area_id, city_id, province_id, type_id, zone_id, }) {
        const where = {
            ...(area_id && { area_id }),
            ...(zone_id && { zone_id }),
            ...(city_id && { city_id }),
            ...(province_id && { province_id }),
            ...(type_id && { type_id }),
        };
        const terminals = await prisma_config_1.prisma.terminal.findMany({
            skip: page,
            take: limit,
            where,
            include: {
                area: true,
                city: true,
                zone: true,
                province: true,
                agent: {
                    include: {
                        area: true,
                        zone: true,
                        type: true,
                    },
                },
            },
            orderBy: {
                created_at: "desc",
            },
        });
        return terminals.map((terminal) => terminal_mapper_1.TerminalMapper.toDomain(terminal));
    }
    async countAll(params) {
        return await prisma_config_1.prisma.terminal.count({
            where: {
                ...params,
            },
        });
    }
}
exports.PrismaTerminalRepository = PrismaTerminalRepository;
//# sourceMappingURL=prisma-terminal.repository.js.map