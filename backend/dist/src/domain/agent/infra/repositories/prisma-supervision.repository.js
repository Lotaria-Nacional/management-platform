"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaSupervisionRepository = void 0;
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
const supervision_entity_1 = require("../../enterprise/entities/supervision.entity");
class PrismaSupervisionRepository {
    async create(supervision) {
        return await prisma_config_1.prisma.$transaction(async (tx) => {
            await tx.supervision.create({
                data: {
                    items: supervision.props.items,
                    image: supervision.props.image,
                    additional_info: supervision.props.additional_info,
                    updated_at: supervision.props.updated_at ?? new Date(),
                    agent: { connect: { id: supervision.props.agent_id } },
                },
            });
        });
    }
    async delete(id) {
        await prisma_config_1.prisma.$transaction(async (tx) => {
            await tx.supervision.delete({ where: { id } });
        });
    }
    async fetchMany() {
        const supervisions = await prisma_config_1.prisma.supervision.findMany({
            orderBy: {
                created_at: "desc",
            },
            include: {
                agent: true,
            },
        });
        return supervisions.map((data) => supervision_entity_1.Supervision.create({
            additional_info: data.additional_info,
            agent_id: data.agent_id,
            image: data.image,
            items: data.items,
            created_at: data.created_at,
            updated_at: data.updated_at,
            agent: data.agent?.id
                ? {
                    id: data.agent.id,
                    first_name: data.agent.first_name,
                    last_name: data.agent.last_name,
                }
                : undefined,
        }, data.id));
    }
    async getById(id) {
        const existingSupervision = await prisma_config_1.prisma.supervision.findUnique({
            where: {
                id,
            },
            include: {
                agent: true,
            },
        });
        if (!existingSupervision)
            return null;
        const { additional_info, agent_id, created_at, image, items, updated_at, agent, id: revId, } = existingSupervision;
        return supervision_entity_1.Supervision.create({
            additional_info,
            agent_id,
            image,
            items: items,
            created_at,
            updated_at,
            agent: agent?.id
                ? {
                    id: agent.id,
                    first_name: agent.first_name,
                    last_name: agent.last_name,
                }
                : undefined,
        }, revId);
    }
    async save(data) {
        await prisma_config_1.prisma.supervision.update({
            where: { id: data.id },
            data: {
                image: data.props.image,
                items: data.props.items,
                additional_info: data.props.additional_info
            }
        });
    }
    async countAll() {
        return await prisma_config_1.prisma.supervision.count();
    }
}
exports.PrismaSupervisionRepository = PrismaSupervisionRepository;
//# sourceMappingURL=prisma-supervision.repository.js.map