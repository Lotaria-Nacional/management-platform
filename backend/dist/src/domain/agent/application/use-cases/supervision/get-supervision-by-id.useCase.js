"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSupervisionByIdUseCase = void 0;
class GetSupervisionByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const supervision = await this.repository.getById(id);
        if (!supervision) {
            throw new Error("Not Found");
        }
        return { supervision };
    }
}
exports.GetSupervisionByIdUseCase = GetSupervisionByIdUseCase;
//# sourceMappingURL=get-supervision-by-id.useCase.js.map