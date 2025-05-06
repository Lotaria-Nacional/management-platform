import express  from 'express'
import { upload } from '@/shared/middleware/upload'
import { makeAgentControllers } from '../factories/presentation/make-agent'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { InMemoryAgentsRepository } from '@test/infrastructure/in-memory-agent.repository'

const agentRoutes = express.Router()

const inMemoryAgentRepository = new InMemoryAgentsRepository()

const { 
    uploadAgentsController,
    fetchAgentsController,
    registerAgentController,
    editAgentController
 } = makeAgentControllers(inMemoryAgentRepository)

agentRoutes.post("/register", expressRouteAdapter(registerAgentController))
agentRoutes.post("/upload", upload.single("file"), expressRouteAdapter(uploadAgentsController))
agentRoutes.get("/all", expressRouteAdapter(fetchAgentsController))
agentRoutes.put("/:id", expressRouteAdapter(editAgentController))

// agentRoutes.get("/:id", expressRouteAdapter())
export default agentRoutes