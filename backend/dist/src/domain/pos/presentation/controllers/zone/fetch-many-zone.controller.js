"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyZoneController = void 0;
class FetchManyZoneController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(_request) {
        try {
            const response = await this.useCase.execute();
            return {
                statusCode: 200,
                body: response,
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                body: { message: "Internal Server Error", error },
            };
        }
    }
}
exports.FetchManyZoneController = FetchManyZoneController;
//# sourceMappingURL=fetch-many-zone.controller.js.map