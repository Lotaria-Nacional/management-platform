"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_service_1 = require("@/core/infra/impl/bcrypt-service");
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const make_user_controllers_1 = require("@/main/factories/presentation/make-user-controllers");
const prisma_user_repository_1 = require("@/domain/user/infra/repository/prisma-user-repository");
const userRoutes = express_1.default.Router();
const repository = new prisma_user_repository_1.UserPrismaRepository();
const hashService = new bcrypt_service_1.BcryptService();
const { loginUserController, registerUserController } = (0, make_user_controllers_1.makeUserControllers)(repository, hashService);
userRoutes.post("/auth/sign-in", (0, express_route_adapter_1.expressRouteAdapter)(loginUserController));
userRoutes.post("/auth/sign-up", (0, express_route_adapter_1.expressRouteAdapter)(registerUserController));
exports.default = userRoutes;
//# sourceMappingURL=user-routes.js.map