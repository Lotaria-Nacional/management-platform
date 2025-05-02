import express  from 'express'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { InMemoryPosAvaliationRepository } from '@test/infrastructure/in-memory-pos-avaliation-repository'
import { makeFetchPosAvaliationController } from '../factories/presentation/pos/make-fetch-pos-avaliation-controller'
import { makeSubmitPosAvaliationController } from '../factories/presentation/pos/make-submit-pos-avaliation-controller'

const posAvaliationRoutes = express.Router()

const inMemoryPosAvaliationRepository = new InMemoryPosAvaliationRepository()

const { submitPosAvaliationController } = makeSubmitPosAvaliationController(inMemoryPosAvaliationRepository)
const { fetchAllPosAvaliationController } = makeFetchPosAvaliationController(inMemoryPosAvaliationRepository)

posAvaliationRoutes.post("/submit", expressRouteAdapter(submitPosAvaliationController))
posAvaliationRoutes.get("/all", expressRouteAdapter(fetchAllPosAvaliationController))

export default posAvaliationRoutes