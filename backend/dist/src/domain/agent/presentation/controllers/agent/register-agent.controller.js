"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAgentController = void 0;
const register_agent_schema_1 = require("@/domain/agent/application/validations/agent/register-agent-schema");
const http_status_code_1 = require("@/core/http/http-status-code");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class RegisterAgentController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const body = register_agent_schema_1.registerAgentSchema.parse(request.body);
            await this.useCase.execute({ ...body });
            return {
                body: { message: "Agente criado com sucesso" },
                statusCode: http_status_code_1.HttpStatusCode.CREATED,
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.RegisterAgentController = RegisterAgentController;
//# sourceMappingURL=register-agent.controller.js.map