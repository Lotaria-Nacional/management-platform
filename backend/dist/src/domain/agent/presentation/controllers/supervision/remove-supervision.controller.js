"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveSupervisionController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const params_schema_1 = require("@/core/validations/common/params.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class RemoveSupervisionController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = params_schema_1.IdParamsSchema.parse(request.params);
            await this.useCase.execute(id);
            return {
                statusCode: http_status_code_1.HttpStatusCode.OK,
                body: {
                    message: "Supervisão removida com sucesso",
                },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.RemoveSupervisionController = RemoveSupervisionController;
//# sourceMappingURL=remove-supervision.controller.js.map