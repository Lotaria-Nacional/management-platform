"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgentByIdController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const params_schema_1 = require("@/core/validations/common/params.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class GetAgentByIdController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(req) {
        try {
            const { id } = params_schema_1.IdParamsSchema.parse(req.params);
            const response = await this.useCase.execute(id);
            return { body: response, statusCode: http_status_code_1.HttpStatusCode.OK };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.GetAgentByIdController = GetAgentByIdController;
//# sourceMappingURL=get-agent-by-id.controller.js.map