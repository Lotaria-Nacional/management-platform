"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyAdministrationController = void 0;
class FetchManyAdministrationController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(_request) {
        try {
            const data = await this.useCase.execute();
            return {
                statusCode: 200,
                body: data,
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
exports.FetchManyAdministrationController = FetchManyAdministrationController;
//# sourceMappingURL=fetch-many-administration.controller.js.map