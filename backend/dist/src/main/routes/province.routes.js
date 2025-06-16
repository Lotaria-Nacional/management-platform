"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const fetch_many_province_useCase_1 = require("@/domain/pos/application/use-cases/province/fetch-many-province.useCase");
const fetch_many_province_controller_1 = require("@/domain/pos/presentation/controllers/province/fetch-many-province.controller");
const prisma_province_repository_1 = require("@/domain/pos/infra/repositories/prisma-province.repository");
const provinceRoutes = express_1.default.Router();
const repository = new prisma_province_repository_1.PrismaProvinceRepository();
const useCase = new fetch_many_province_useCase_1.FetchManyProvinceUseCase(repository);
const controller = new fetch_many_province_controller_1.FetchManyProvinceController(useCase);
provinceRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(controller));
exports.default = provinceRoutes;
//# sourceMappingURL=province.routes.js.map