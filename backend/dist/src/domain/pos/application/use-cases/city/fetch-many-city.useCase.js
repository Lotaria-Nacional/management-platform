"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyCityUseCase = void 0;
class FetchManyCityUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const cities = await this.repository.fetchMany();
        return cities;
    }
}
exports.FetchManyCityUseCase = FetchManyCityUseCase;
//# sourceMappingURL=fetch-many-city.useCase.js.map