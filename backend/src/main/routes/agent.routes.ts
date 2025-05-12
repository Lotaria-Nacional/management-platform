import express from "express"
import { upload } from "@/shared/middleware/upload"
import { makeAgentControllers } from "../factories/presentation/make-agent"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { PrismaAgentRepository } from "@/domain/agent/infra/interfaces/prisma-agent.repository"

const agentRoutes = express.Router()
const prismaAgentRepository = new PrismaAgentRepository()

const { fetchAgentsController, registerAgentController, editAgentController } =
  makeAgentControllers(prismaAgentRepository)

agentRoutes.post("/register", expressRouteAdapter(registerAgentController))
agentRoutes.get("/all", expressRouteAdapter(fetchAgentsController))
agentRoutes.put("/:id", expressRouteAdapter(editAgentController))

export default agentRoutes
