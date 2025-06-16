"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const make_supervision_controllers_1 = require("../factories/presentation/make-supervision-controllers");
const prisma_supervision_repository_1 = require("@/domain/agent/infra/repositories/prisma-supervision.repository");
const revisionRoutes = express_1.default.Router();
const repository = new prisma_supervision_repository_1.PrismaSupervisionRepository();
const { makeSupervisionController, removeSupervisionController, getSupervisionByIdController, fetchManySupervisionController, } = (0, make_supervision_controllers_1.makeSupervisionControllers)(repository);
revisionRoutes.post("/", (0, express_route_adapter_1.expressRouteAdapter)(makeSupervisionController));
revisionRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(fetchManySupervisionController));
revisionRoutes.get("/:id", (0, express_route_adapter_1.expressRouteAdapter)(getSupervisionByIdController));
revisionRoutes.delete("/:id", (0, express_route_adapter_1.expressRouteAdapter)(removeSupervisionController));
exports.default = revisionRoutes;
//# sourceMappingURL=supervision.routes.js.map