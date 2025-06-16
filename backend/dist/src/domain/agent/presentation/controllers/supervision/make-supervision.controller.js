"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeSupervisionController = void 0;
const make_supervision_schema_1 = require("@/domain/agent/application/validations/supervision/make-supervision-schema");
const http_status_code_1 = require("@/core/http/http-status-code");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class MakeSupervisionController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const body = make_supervision_schema_1.makeSupervisionSchema.parse(request.body);
            await this.useCase.execute(body);
            return {
                statusCode: http_status_code_1.HttpStatusCode.CREATED,
                body: {
                    message: "Supervisão realizada com sucesso.",
                },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.MakeSupervisionController = MakeSupervisionController;
//# sourceMappingURL=make-supervision.controller.js.map