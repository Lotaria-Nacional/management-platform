import express  from 'express'
import { upload } from '@/shared/middleware/upload'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { InMemoryAgentsRepository } from '@test/infrastructure/in-memory-agent.repository'
import { makeUploadAgentsController } from '@/main/factories/presentation/agents/make-upload-agent-controller'
import { makeFetchAgentsController } from '../factories/presentation/agents/make-fetch-agents-controller'

const agentRoutes = express.Router()

const inMemoryAgentRepository = new InMemoryAgentsRepository()

const { uploadAgentsController } = makeUploadAgentsController(inMemoryAgentRepository)
const { fetchAgentsController } = makeFetchAgentsController(inMemoryAgentRepository)

agentRoutes.post("/upload", upload.single("file"), expressRouteAdapter(uploadAgentsController))
agentRoutes.get("/all", expressRouteAdapter(fetchAgentsController))

export default agentRoutes