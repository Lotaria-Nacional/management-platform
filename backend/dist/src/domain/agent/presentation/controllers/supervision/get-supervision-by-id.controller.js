"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSupervisionByIdController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const params_schema_1 = require("@/core/validations/common/params.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class GetSupervisionByIdController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = params_schema_1.IdParamsSchema.parse(request.params);
            const { supervision } = await this.useCase.execute(id);
            return {
                body: supervision,
                statusCode: http_status_code_1.HttpStatusCode.OK,
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.GetSupervisionByIdController = GetSupervisionByIdController;
//# sourceMappingURL=get-supervision-by-id.controller.js.map