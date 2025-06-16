"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const prisma_city_repository_1 = require("@/domain/pos/infra/repositories/prisma-city.repository");
const fetch_many_city_useCase_1 = require("@/domain/pos/application/use-cases/city/fetch-many-city.useCase");
const fetch_many_city_controller_1 = require("@/domain/pos/presentation/controllers/city/fetch-many-city.controller");
const cityRoutes = express_1.default.Router();
const repository = new prisma_city_repository_1.PrismaCityRepository();
const useCase = new fetch_many_city_useCase_1.FetchManyCityUseCase(repository);
const controller = new fetch_many_city_controller_1.FetchManyCityController(useCase);
cityRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(controller));
exports.default = cityRoutes;
//# sourceMappingURL=city.routes.js.map