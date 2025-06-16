"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyAdministrationUseCase = void 0;
class FetchManyAdministrationUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const administrations = await this.repository.fetchMany();
        return administrations;
    }
}
exports.FetchManyAdministrationUseCase = FetchManyAdministrationUseCase;
//# sourceMappingURL=fetch-many-administration.useCase.js.map