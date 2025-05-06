import express  from 'express'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { MakePosAvaliationController } from '../factories/presentation/make-pos-avaliation'
import { InMemoryPosAvaliationRepository } from '@test/infrastructure/in-memory-pos-avaliation-repository'

const posAvaliationRoutes = express.Router()

const inMemoryPosAvaliationRepository = new InMemoryPosAvaliationRepository()
const makePosAvaliationController = new MakePosAvaliationController(inMemoryPosAvaliationRepository)

const { submitPosAvaliationController } = makePosAvaliationController.submitAvaliationPos()
const { fetchAllPosAvaliationController } = makePosAvaliationController.fetchAvaliationPos()

posAvaliationRoutes.post("/submit", expressRouteAdapter(submitPosAvaliationController))
posAvaliationRoutes.get("/all", expressRouteAdapter(fetchAllPosAvaliationController))

export default posAvaliationRoutes