import express  from 'express'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { makeUploadAgentsController } from '@/main/factories/presentation/make-create-agent-controller'

const agentRoutes = express.Router()

const { uploadAgentsController } = makeUploadAgentsController()

agentRoutes.post("/upload", expressRouteAdapter(uploadAgentsController))