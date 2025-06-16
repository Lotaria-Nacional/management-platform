"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const prisma_administration_repository_1 = require("@/domain/pos/infra/repositories/prisma-administration.repository");
const fetch_many_administration_useCase_1 = require("@/domain/pos/application/use-cases/administration/fetch-many-administration.useCase");
const fetch_many_administration_controller_1 = require("@/domain/pos/presentation/controllers/administration/fetch-many-administration.controller");
const adminstrationRoutes = express_1.default.Router();
const repository = new prisma_administration_repository_1.PrismaAdministrationRepository();
const useCase = new fetch_many_administration_useCase_1.FetchManyAdministrationUseCase(repository);
const controller = new fetch_many_administration_controller_1.FetchManyAdministrationController(useCase);
adminstrationRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(controller));
exports.default = adminstrationRoutes;
//# sourceMappingURL=administration.routes.js.map