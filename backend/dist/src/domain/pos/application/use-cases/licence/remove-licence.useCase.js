"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveLicenceUseCase = void 0;
class RemoveLicenceUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const licence = await this.repository.getById(id);
        if (!licence) {
            throw new Error("A licença solicitada não existe.");
        }
        await this.repository.delete(licence.id);
    }
}
exports.RemoveLicenceUseCase = RemoveLicenceUseCase;
//# sourceMappingURL=remove-licence.useCase.js.map