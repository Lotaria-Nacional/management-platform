"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAgentRepository = void 0;
const agent_mapper_1 = require("../mappers/agent-mapper");
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
class PrismaAgentRepository {
    async create(agent) {
        try {
            await prisma_config_1.prisma.$transaction(async (tx) => {
                await tx.agent.create({
                    data: agent_mapper_1.AgentMapper.toPersistence(agent),
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getById(id) {
        const agent = await prisma_config_1.prisma.agent.findUnique({
            where: { id },
            include: {
                terminal: true,
                pos: {
                    include: {
                        area: true,
                        zone: true,
                        type: true,
                        city: true,
                        province: true,
                        subtype: true,
                        licence: true,
                        administration: true,
                    },
                },
            },
        });
        if (!agent) {
            return null;
        }
        return agent_mapper_1.AgentMapper.toDomain(agent);
    }
    async fetchMany({ limit = 10, page = 0, area_id, zone_id, city_id, province_id, status, type_id, }) {
        const where = {
            ...(status && { status }),
            ...(city_id && { city_id }),
            ...(province_id && { province_id }),
            ...(type_id && { type_id }),
        };
        // Filtros relacionados ao POS (evita criar pos se não houver nenhum dos dois)
        if (area_id || zone_id) {
            where.pos = {
                ...(area_id && { area_id }),
                ...(zone_id && { zone_id }),
            };
        }
        const agents = await prisma_config_1.prisma.agent.findMany({
            skip: page,
            take: limit,
            orderBy: {
                id_reference: "asc",
            },
            where,
            include: {
                terminal: true,
                pos: {
                    include: {
                        area: true,
                        zone: true,
                        type: true,
                        city: true,
                        subtype: true,
                        province: true,
                    },
                },
            },
        });
        return agents.map((agent) => agent_mapper_1.AgentMapper.toDomain(agent));
    }
    async save(agent) {
        try {
            await prisma_config_1.prisma.$transaction(async (tx) => {
                await tx.agent.update({
                    where: { id: agent.id },
                    include: {
                        area: true,
                        city: true,
                        pos: {
                            include: {
                                province: true,
                                type: true,
                                zone: true,
                            },
                        },
                        terminal: true,
                    },
                    data: agent_mapper_1.AgentMapper.toPersistence(agent),
                });
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async countAll({ area_id, zone_id, city_id, province_id, status, type_id, } = {}) {
        return prisma_config_1.prisma.agent.count({
            where: {
                status,
                type_id,
                city_id,
                province_id,
                pos: {
                    area_id,
                    zone_id,
                },
            },
        });
    }
}
exports.PrismaAgentRepository = PrismaAgentRepository;
//# sourceMappingURL=prisma-agent.repository.js.map