"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const prisma_type_repository_1 = require("@/domain/pos/infra/repositories/prisma-type.repository");
const fetch_many_type_useCase_1 = require("@/domain/pos/application/use-cases/type/fetch-many-type.useCase");
const fetch_many_type_controller_1 = require("@/domain/pos/presentation/controllers/type/fetch-many-type.controller");
const typeRoutes = express_1.default.Router();
const repository = new prisma_type_repository_1.PrismaTypeRepository();
const useCase = new fetch_many_type_useCase_1.FetchManyTypeUseCase(repository);
const controller = new fetch_many_type_controller_1.FetchManyTypeController(useCase);
typeRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(controller));
exports.default = typeRoutes;
//# sourceMappingURL=type.routes.js.map