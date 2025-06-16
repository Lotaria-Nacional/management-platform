"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_route_adapter_1 = require("@/main/adapters/express-route-adapter");
const make_agent_controllers_1 = require("../factories/presentation/make-agent-controllers");
const prisma_pos_repository_1 = require("@/domain/pos/infra/repositories/prisma-pos.repository");
const prisma_agent_repository_1 = require("@/domain/agent/infra/repositories/prisma-agent.repository");
const prisma_terminal_repository_1 = require("@/domain/terminal/infra/interfaces/prisma/prisma-terminal.repository");
const agentRoutes = express_1.default.Router();
const repository = new prisma_agent_repository_1.PrismaAgentRepository();
const posRepository = new prisma_pos_repository_1.PrismaPosRepository();
const terminalRepository = new prisma_terminal_repository_1.PrismaTerminalRepository();
const { editAgentController, getAgentByIdController, registerAgentController, fetchManyAgentsController, } = (0, make_agent_controllers_1.makeAgentControllers)(repository, posRepository, terminalRepository);
agentRoutes.post("/", (0, express_route_adapter_1.expressRouteAdapter)(registerAgentController));
agentRoutes.put("/:id", (0, express_route_adapter_1.expressRouteAdapter)(editAgentController));
agentRoutes.get("/:id", (0, express_route_adapter_1.expressRouteAdapter)(getAgentByIdController));
agentRoutes.get("/", (0, express_route_adapter_1.expressRouteAdapter)(fetchManyAgentsController));
exports.default = agentRoutes;
//# sourceMappingURL=agent.routes.js.map