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
} = makeAgentControllers(repository)

agentRoutes.post("/", expressRouteAdapter(registerAgentController))
agentRoutes.get("/", expressRouteAdapter(fetchManyAgentsController))
agentRoutes.put("/:id", expressRouteAdapter(editAgentController))

export default agentRoutes
