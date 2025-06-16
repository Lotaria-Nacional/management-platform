"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePagination = calculatePagination;
async function calculatePagination(repository, { page = 1, limit = 10 }) {
    const offset = Math.max(0, (page - 1) * limit);
    const [data, total] = await Promise.all([
        repository.fetchMany({ page: offset, limit }),
        repository.countAll(),
    ]);
    const totalPages = Math.ceil(total / limit);
    return { data, total, totalPages };
}
//# sourceMappingURL=calculate-pagination.js.map