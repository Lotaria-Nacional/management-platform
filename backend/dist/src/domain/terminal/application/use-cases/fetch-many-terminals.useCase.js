"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyTerminalsUseCase = void 0;
class FetchManyTerminalsUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(params) {
        const { page = 1, limit, ...filters } = params;
        const isPaginated = typeof limit === "number" && limit > 0;
        if (!isPaginated) {
            const terminals = await this.repository.fetchMany({ ...filters });
            return {
                data: terminals.map((a) => a.toJSON()),
                total: terminals.length,
                totalPages: 1,
            };
        }
        const offset = (page - 1) * limit;
        const [terminals, total] = await Promise.all([
            this.repository.fetchMany({ page: offset, limit, ...filters }),
            this.repository.countAll({ ...filters }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return {
            data: terminals.map((t) => t.toJSON()),
            total,
            totalPages,
        };
    }
}
exports.FetchManyTerminalsUseCase = FetchManyTerminalsUseCase;
//# sourceMappingURL=fetch-many-terminals.useCase.js.map