"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyProvinceUseCase = void 0;
class FetchManyProvinceUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const provinces = await this.repository.fetchMany();
        return provinces;
    }
}
exports.FetchManyProvinceUseCase = FetchManyProvinceUseCase;
//# sourceMappingURL=fetch-many-province.useCase.js.map