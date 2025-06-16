"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSupervisionUseCase = void 0;
class RemoveSupervisionUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const supervision = await this.repository.getById(id);
        if (!supervision) {
            throw new Error("Supervision not found.");
        }
        await this.repository.delete(id);
    }
}
exports.RemoveSupervisionUseCase = RemoveSupervisionUseCase;
//# sourceMappingURL=remove-supervision.useCase.js.map