import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makeAgentControllers } from "../factories/presentation/make-agent-controllers"
import { PrismaPosRepository } from "@/domain/pos/infra/repositories/prisma-pos.repository"
import { PrismaAgentRepository } from "@/domain/agent/infra/repositories/prisma-agent.repository"

const agentRoutes = express.Router()
const repository = new PrismaAgentRepository()
const posRepository = new PrismaPosRepository()

const {
  editAgentController,
  getAgentByIdController,
  registerAgentController,
  fetchManyAgentsController,
} = makeAgentControllers(repository, posRepository)

agentRoutes.post("/", expressRouteAdapter(registerAgentController))
agentRoutes.put("/:id", expressRouteAdapter(editAgentController))
agentRoutes.get("/:id", expressRouteAdapter(getAgentByIdController))
agentRoutes.get("/", expressRouteAdapter(fetchManyAgentsController))

export default agentRoutes
