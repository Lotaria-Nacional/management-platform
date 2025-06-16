"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyPosUseCase = void 0;
class FetchManyPosUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ page = 1, limit, ...filters }) {
        const isPaginated = typeof limit === "number" && limit > 0;
        if (!isPaginated) {
            const pos = await this.repository.fetchMany({ ...filters });
            return {
                data: pos.map((p) => p.toJSON()),
                total: pos.length,
                totalPages: 1,
            };
        }
        const offset = (page - 1) * limit;
        const [pos, total] = await Promise.all([
            this.repository.fetchMany({
                page: offset,
                limit,
                ...filters,
            }),
            this.repository.countAll({
                ...filters,
            }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return {
            data: pos.map((p) => p.toJSON()),
            total,
            totalPages,
        };
    }
}
exports.FetchManyPosUseCase = FetchManyPosUseCase;
//# sourceMappingURL=fetch-many-pos.useCase.js.map