"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const make_licence_controllers_1 = require("../factories/presentation/make-licence-controllers");
const prisma_licence_repository_1 = require("@/domain/pos/infra/repositories/prisma-licence.repository");
const licenceRoutes = express_1.default.Router();
const repository = new prisma_licence_repository_1.PrismaLicenceRepository();
const { addLicenceController, editLicenceController, fetchManyLicencesController, getLicenceByIdController, removeLicenceController, } = (0, make_licence_controllers_1.makeLicenceControllers)(repository);
licenceRoutes.post("/", (0, express_route_adapter_1.expressRouteAdapter)(addLicenceController));
licenceRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(fetchManyLicencesController));
licenceRoutes.get("/:id", (0, express_route_adapter_1.expressRouteAdapter)(getLicenceByIdController));
licenceRoutes.put("/:id", (0, express_route_adapter_1.expressRouteAdapter)(editLicenceController));
licenceRoutes.delete("/:id", (0, express_route_adapter_1.expressRouteAdapter)(removeLicenceController));
exports.default = licenceRoutes;
//# sourceMappingURL=licence.routes.js.map