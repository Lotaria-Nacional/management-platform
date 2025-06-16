"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchManyAgentsController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const query_schema_1 = require("@/core/validations/common/query.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class FetchManyAgentsController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        try {
            const query = query_schema_1.QueryParamsSchema.parse(req.query);
            const response = await this.useCase.execute(query);
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
exports.FetchManyAgentsController = FetchManyAgentsController;
//# sourceMappingURL=fetch-many-agents.controller.js.map