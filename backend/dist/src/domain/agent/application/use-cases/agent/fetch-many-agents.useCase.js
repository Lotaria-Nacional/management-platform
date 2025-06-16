"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyAgentsUseCase = void 0;
class FetchManyAgentsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ page = 1, limit, zone_id, area_id, city_id, province_id, status, type_id, }) {
        const isPaginated = typeof limit === "number" && limit > 0;
        if (!isPaginated) {
            const agents = await this.repository.fetchMany({
                zone_id,
                area_id,
                city_id,
                province_id,
                status,
                type_id,
            });
            return {
                data: agents.map((a) => a.toJSON()),
                total: agents.length,
                totalPages: 1,
            };
        }
        const offset = (page - 1) * limit;
        const [agents, total] = await Promise.all([
            this.repository.fetchMany({
                page: offset,
                limit,
                zone_id,
                area_id,
                city_id,
                province_id,
                status,
                type_id,
            }),
            this.repository.countAll({
                zone_id,
                area_id,
                city_id,
                province_id,
                status,
                type_id,
            }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return {
            data: agents.map((agent) => agent.toJSON()),
            total,
            totalPages,
        };
    }
}
exports.FetchManyAgentsUseCase = FetchManyAgentsUseCase;
//# sourceMappingURL=fetch-many-agents.useCase.js.map