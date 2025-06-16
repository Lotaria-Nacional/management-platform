"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTerminalController = void 0;
const add_terminal_schema_1 = require("../../application/validations/add-terminal-schema");
const http_status_code_1 = require("@/core/http/http-status-code");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
class AddTerminalController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const body = add_terminal_schema_1.addTerminalSchema.parse(request.body);
            await this.useCase.execute(body);
            return {
                statusCode: http_status_code_1.HttpStatusCode.OK,
                body: { message: "Terminal adicionado com sucesso" },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.AddTerminalController = AddTerminalController;
//# sourceMappingURL=add-terminal.controller.js.map