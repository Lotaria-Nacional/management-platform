"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const fetch_many_area_useCase_1 = require("@/domain/pos/application/use-cases/area/fetch-many-area.useCase");
const fetch_many_area_controller_1 = require("@/domain/pos/presentation/controllers/area/fetch-many-area.controller");
const prisma_area_repository_1 = require("@/domain/pos/infra/repositories/prisma-area.repository");
const areaRoutes = express_1.default.Router();
const repository = new prisma_area_repository_1.PrismaAreaRepository();
const useCase = new fetch_many_area_useCase_1.FetchManyAreaUseCase(repository);
const controller = new fetch_many_area_controller_1.FetchManyAreaController(useCase);
areaRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(controller));
exports.default = areaRoutes;
//# sourceMappingURL=area.routes.js.map