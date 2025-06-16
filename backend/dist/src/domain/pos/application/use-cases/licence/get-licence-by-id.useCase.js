"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLicenceByIdUseCase = void 0;
class GetLicenceByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const licence = await this.repository.getById(id);
        if (!licence) {
            throw new Error("A licença solicitada não existe");
        }
        return { licence };
    }
}
exports.GetLicenceByIdUseCase = GetLicenceByIdUseCase;
//# sourceMappingURL=get-licence-by-id.useCase.js.map