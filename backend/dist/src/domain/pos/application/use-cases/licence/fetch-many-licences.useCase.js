"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyLicencesUseCase = void 0;
const calculate_pagination_1 = require("@/shared/utils/calculate-pagination");
class FetchManyLicencesUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ limit, page, }) {
        if (!limit) {
            const licences = await this.repository.fetchMany({ limit, page });
            return {
                totalPages: 1,
                total: licences.length,
                data: licences.map((l) => l.toJSON()),
            };
        }
        const { data, total, totalPages } = await (0, calculate_pagination_1.calculatePagination)(this.repository, { limit, page });
        return {
            total,
            totalPages,
            data: data.map((licence) => licence.toJSON()),
        };
    }
}
exports.FetchManyLicencesUseCase = FetchManyLicencesUseCase;
//# sourceMappingURL=fetch-many-licences.useCase.js.map