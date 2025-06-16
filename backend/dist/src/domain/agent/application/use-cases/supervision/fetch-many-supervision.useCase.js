"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManySupervisionUseCase = void 0;
const calculate_pagination_1 = require("@/shared/utils/calculate-pagination");
class FetchManySupervisionUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ limit, page, }) {
        if (!limit) {
            const supervision = await this.repository.fetchMany({ page, limit });
            return {
                totalPages: 1,
                total: supervision.length,
                data: supervision.map((revision) => revision.toJSON()),
            };
        }
        const { data, total, totalPages } = await (0, calculate_pagination_1.calculatePagination)(this.repository, { limit, page });
        return {
            total,
            totalPages,
            data: data.map((revision) => revision.toJSON()),
        };
    }
}
exports.FetchManySupervisionUseCase = FetchManySupervisionUseCase;
//# sourceMappingURL=fetch-many-supervision.useCase.js.map