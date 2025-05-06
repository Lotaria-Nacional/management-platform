import express  from 'express'
import { upload } from '@/shared/middleware/upload'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { InMemoryAgentsRepository } from '@test/infrastructure/in-memory-agent.repository'
import { makeFetchAgentsController } from '../factories/presentation/agents/make-fetch-agents-controller'
import { makeUploadAgentsController } from '@/main/factories/presentation/agents/make-upload-agent-controller'
import { makeRegisterSgentController } from '../factories/presentation/agents/make-register-agent-controller'

const agentRoutes = express.Router()

const inMemoryAgentRepository = new InMemoryAgentsRepository()

const { uploadAgentsController } = makeUploadAgentsController(inMemoryAgentRepository)
const { fetchAgentsController } = makeFetchAgentsController(inMemoryAgentRepository)
const { registerAgentController } = makeRegisterSgentController(inMemoryAgentRepository)

agentRoutes.post("/register", expressRouteAdapter(registerAgentController))
agentRoutes.get("/all", expressRouteAdapter(fetchAgentsController))
agentRoutes.post("/upload", upload.single("file"), expressRouteAdapter(uploadAgentsController))

export default agentRoutes