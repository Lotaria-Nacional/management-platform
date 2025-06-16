"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserControllers = makeUserControllers;
const login_user_1 = require("@/domain/user/application/use-cases/auth/login-user");
const register_user_1 = require("@/domain/user/application/use-cases/auth/register-user");
const login_user_controller_1 = require("@/domain/user/presentation/controllers/login-user.controller");
const register_user_controller_1 = require("@/domain/user/presentation/controllers/register-user.controller");
function makeUserControllers(repository, hashService) {
    const loginUserController = new login_user_controller_1.LoginUserController(new login_user_1.LoginUserUseCase(repository, hashService));
    const registerUserController = new register_user_controller_1.RegisterUserController(new register_user_1.RegisterUserUseCase(repository, hashService));
    return {
        loginUserController,
        registerUserController
    };
}
//# sourceMappingURL=make-user-controllers.js.map