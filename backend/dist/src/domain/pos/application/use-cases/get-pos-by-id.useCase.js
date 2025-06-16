"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPosByIdUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class GetPosByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const pos = await this.repository.getById(id);
        if (!pos) {
            throw new not_found_error_1.NotFoundError("Pos não encontrado");
        }
        return { pos };
    }
}
exports.GetPosByIdUseCase = GetPosByIdUseCase;
//# sourceMappingURL=get-pos-by-id.useCase.js.map