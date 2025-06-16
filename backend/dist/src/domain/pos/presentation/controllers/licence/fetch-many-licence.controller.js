"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyLicenceController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const query_schema_1 = require("@/core/validations/common/query.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class FetchManyLicenceController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { page, limit } = query_schema_1.QueryParamsSchema.parse(request.query);
            const response = await this.useCase.execute({ limit, page });
            return {
                body: response,
                statusCode: http_status_code_1.HttpStatusCode.OK,
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.FetchManyLicenceController = FetchManyLicenceController;
//# sourceMappingURL=fetch-many-licence.controller.js.map