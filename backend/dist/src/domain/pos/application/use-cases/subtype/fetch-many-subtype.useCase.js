"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManySubtypeUseCase = void 0;
class FetchManySubtypeUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const subtypes = await this.repository.fetchMany();
        return subtypes;
    }
}
exports.FetchManySubtypeUseCase = FetchManySubtypeUseCase;
//# sourceMappingURL=fetch-many-subtype.useCase.js.map