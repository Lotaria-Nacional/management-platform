"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const fetch_many_zone_useCase_1 = require("@/domain/pos/application/use-cases/zone/fetch-many-zone.useCase");
const fetch_many_zone_controller_1 = require("@/domain/pos/presentation/controllers/zone/fetch-many-zone.controller");
const prisma_zone_repository_1 = require("@/domain/pos/infra/repositories/prisma-zone.repository");
const zoneRoutes = express_1.default.Router();
const repository = new prisma_zone_repository_1.PrismaZoneRepository();
const useCase = new fetch_many_zone_useCase_1.FetchManyZoneUseCase(repository);
const controller = new fetch_many_zone_controller_1.FetchManyZoneController(useCase);
zoneRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(controller));
exports.default = zoneRoutes;
//# sourceMappingURL=zone.routes.js.map