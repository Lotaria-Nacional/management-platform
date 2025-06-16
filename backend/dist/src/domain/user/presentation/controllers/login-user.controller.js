"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = void 0;
const http_status_code_1 = require("@/core/http/http-status-code");
const handle_controller_error_1 = require("@/shared/utils/handle-controller-error");
const login_user_schema_1 = require("../../infra/validation/login-user.schema");
class LoginUserController {
    constructor(uesCase) {
        this.uesCase = uesCase;
    }
    async handle(request) {
        try {
            const body = login_user_schema_1.loginUserSchema.parse(request.body);
            const user = await this.uesCase.execute(body);
            return {
                statusCode: http_status_code_1.HttpStatusCode.OK,
                body: {
                    message: "Login bem sucedido",
                    user
                }
            };
        }
        catch (error) {
            return (0, handle_controller_error_1.handleControllerError)(error);
        }
    }
}
exports.LoginUserController = LoginUserController;
//# sourceMappingURL=login-user.controller.js.map