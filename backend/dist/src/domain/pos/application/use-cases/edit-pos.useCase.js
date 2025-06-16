"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditPosUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class EditPosUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const pos = await this.repository.getById(data.id);
        if (!pos) {
            throw new not_found_error_1.NotFoundError("Pos não encontrado");
        }
        pos.update(data);
        pos.checkPosStatus();
        await this.repository.save(pos);
    }
}
exports.EditPosUseCase = EditPosUseCase;
//# sourceMappingURL=edit-pos.useCase.js.map