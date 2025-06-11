import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makeAgentControllers } from "../factories/presentation/make-agent-controllers"
import { PrismaAgentRepository } from "@/domain/agent/infra/repositories/prisma-agent.repository"

const agentRoutes = express.Router()
const repository = new PrismaAgentRepository()

const {
  fetchManyAgentsController,
  registerAgentController,
  editAgentController,
  getAgentByIdController
} = makeAgentControllers(repository)

agentRoutes.post("/", expressRouteAdapter(registerAgentController))
agentRoutes.put("/:id", expressRouteAdapter(editAgentController))
agentRoutes.get("/:id", expressRouteAdapter(getAgentByIdController))
agentRoutes.get("/", expressRouteAdapter(fetchManyAgentsController))

export default agentRoutes
