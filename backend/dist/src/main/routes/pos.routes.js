"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const make_pos_controllers_1 = require("../factories/presentation/make-pos-controllers");
const prisma_pos_repository_1 = require("@/domain/pos/infra/repositories/prisma-pos.repository");
const posRoutes = express_1.default.Router();
const repository = new prisma_pos_repository_1.PrismaPosRepository();
const { addPosController, editPosController, fetchManyPosController, getPosByIdController, removePosController, } = (0, make_pos_controllers_1.makePosControllers)(repository);
posRoutes.post("/", (0, express_route_adapter_1.expressRouteAdapter)(addPosController));
posRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(fetchManyPosController));
posRoutes.get("/:id", (0, express_route_adapter_1.expressRouteAdapter)(getPosByIdController));
posRoutes.put("/:id", (0, express_route_adapter_1.expressRouteAdapter)(editPosController));
posRoutes.delete("/:id", (0, express_route_adapter_1.expressRouteAdapter)(removePosController));
exports.default = posRoutes;
//# sourceMappingURL=pos.routes.js.map