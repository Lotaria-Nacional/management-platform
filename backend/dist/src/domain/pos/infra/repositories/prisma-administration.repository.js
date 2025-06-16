"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaAdministrationRepository = void 0;
const prisma_config_1 = require("@/core/infra/database/prisma/prisma.config");
const administration_entity_1 = require("../../enterprise/entities/administration.entity");
class PrismaAdministrationRepository {
    async fetchMany() {
        const administrations = await prisma_config_1.prisma.administration.findMany({
            orderBy: {
                created_at: "desc",
            },
            include: {
                licences: true,
            },
        });
        return administrations.map((administration) => administration_entity_1.Administration.create({
            name: administration.name,
            licences_id: administration.licences.map(licence => licence.id),
            created_at: administration.created_at,
        }, administration.id));
    }
}
exports.PrismaAdministrationRepository = PrismaAdministrationRepository;
//# sourceMappingURL=prisma-administration.repository.js.map