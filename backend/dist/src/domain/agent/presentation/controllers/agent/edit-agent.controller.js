"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAgentController = void 0;
const edit_agent_schema_1 = require("@/domain/agent/application/validations/agent/edit-agent-schema");
const http_status_code_1 = require("@/core/http/http-status-code");
const params_schema_1 = require("@/core/validations/common/params.schema");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class EditAgentController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const { id } = params_schema_1.IdParamsSchema.parse(request.params);
            const body = edit_agent_schema_1.editAgentSchema.parse({ ...request.body, id });
            await this.useCase.execute({ ...body });
            return {
                body: {
                    message: "Agente atualizado com sucesso",
                },
                statusCode: http_status_code_1.HttpStatusCode.OK,
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.EditAgentController = EditAgentController;
//# sourceMappingURL=edit-agent.controller.js.map