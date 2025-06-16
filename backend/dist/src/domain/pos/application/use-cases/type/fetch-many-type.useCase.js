"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyTypeUseCase = void 0;
class FetchManyTypeUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const types = await this.repository.fetchMany();
        return types;
    }
}
exports.FetchManyTypeUseCase = FetchManyTypeUseCase;
//# sourceMappingURL=fetch-many-type.useCase.js.map