"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const make_terminal_controllers_1 = require("../factories/presentation/make-terminal-controllers");
const prisma_terminal_repository_1 = require("@/domain/terminal/infra/interfaces/prisma/prisma-terminal.repository");
const terminalRoutes = (0, express_1.Router)();
const repository = new prisma_terminal_repository_1.PrismaTerminalRepository();
const { addTerminalController, editTerminalController, fetchManyTerminalsController, getTerminalByIdController, removeTerminalController, } = (0, make_terminal_controllers_1.makeTerminalControllers)(repository);
terminalRoutes.post("/", (0, express_route_adapter_1.expressRouteAdapter)(addTerminalController));
terminalRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(fetchManyTerminalsController));
terminalRoutes.get("/:id", (0, express_route_adapter_1.expressRouteAdapter)(getTerminalByIdController));
terminalRoutes.put("/:id", (0, express_route_adapter_1.expressRouteAdapter)(editTerminalController));
terminalRoutes.delete("/:id", (0, express_route_adapter_1.expressRouteAdapter)(removeTerminalController));
exports.default = terminalRoutes;
//# sourceMappingURL=terminal.routes.js.map