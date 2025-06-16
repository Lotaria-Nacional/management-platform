"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
const register_user_schema_1 = require("../../infra/validation/register-user.schema");
class RegisterUserController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    async handle(request) {
        try {
            const body = register_user_schema_1.registerUserSchema.parse(request.body);
            const user = await this.useCase.execute(body);
            return {
                statusCode: http_status_code_1.HttpStatusCode.CREATED,
                body: {
                    message: "Usuário registrado com sucesso",
                    data: {
                        id: user.id,
                        email: user.email,
                        last_name: user.last_name,
                        first_name: user.first_name,
                        role: user.role
                    },
                },
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.RegisterUserController = RegisterUserController;
//# sourceMappingURL=register-user.controller.js.map