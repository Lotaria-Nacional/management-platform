"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemovePosUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class RemovePosUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const pos = await this.repository.getById(id);
        if (!pos) {
            throw new not_found_error_1.NotFoundError("Pos não encontrado");
        }
        await this.repository.delete(id);
    }
}
exports.RemovePosUseCase = RemovePosUseCase;
//# sourceMappingURL=remove-pos.useCase.js.map