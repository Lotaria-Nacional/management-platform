"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyZoneUseCase = void 0;
class FetchManyZoneUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const zones = await this.repository.fetchMany();
        return zones;
    }
}
exports.FetchManyZoneUseCase = FetchManyZoneUseCase;
//# sourceMappingURL=fetch-many-zone.useCase.js.map