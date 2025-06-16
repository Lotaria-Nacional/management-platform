"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyAreaUseCase = void 0;
class FetchManyAreaUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const areas = await this.repository.fetchMany();
        return areas;
    }
}
exports.FetchManyAreaUseCase = FetchManyAreaUseCase;
//# sourceMappingURL=fetch-many-area.useCase.js.map