"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditLicenceUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class EditLicenceUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ id, ...updates }) {
        const licence = await this.repository.getById(id);
        if (!licence) {
            throw new not_found_error_1.NotFoundError("A licença solicitada não existe.");
        }
        licence.update(updates);
        licence.checkLicenceStatus();
        await this.repository.save(licence);
    }
}
exports.EditLicenceUseCase = EditLicenceUseCase;
//# sourceMappingURL=edit-licence.useCase.js.map