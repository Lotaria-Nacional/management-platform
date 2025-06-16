"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const prisma_subtype_repository_1 = require("@/domain/pos/infra/repositories/prisma-subtype.repository");
const fetch_many_subtype_useCase_1 = require("@/domain/pos/application/use-cases/subtype/fetch-many-subtype.useCase");
const fetch_many_subtype_controller_1 = require("@/domain/pos/presentation/controllers/subtype/fetch-many-subtype.controller");
const subtypeRoutes = express_1.default.Router();
const repository = new prisma_subtype_repository_1.PrismaSubtypeRepository();
const useCase = new fetch_many_subtype_useCase_1.FetchManySubtypeUseCase(repository);
const controller = new fetch_many_subtype_controller_1.FetchManySubtypeController(useCase);
subtypeRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(controller));
exports.default = subtypeRoutes;
//# sourceMappingURL=subtype.routes.js.map