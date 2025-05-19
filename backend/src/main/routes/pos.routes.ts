import express  from 'express'
import { upload } from '@/shared/middleware/upload'
import { MakePosController } from '../factories/presentation/make-pos'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { InMemoryPosRepository } from '@test/infrastructure/in-memory-pos.repository'

const posRoutes = express.Router()

const inMemoryPosRepository = new InMemoryPosRepository()

const makePosController = new MakePosController(inMemoryPosRepository)

const { uploadPosController } = makePosController.uploadPos()
const { fetchPosController } = makePosController.fetchPos()

posRoutes.post("/upload", upload.single("file"), expressRouteAdapter(uploadPosController))
posRoutes.get("/", expressRouteAdapter(fetchPosController))

export default posRoutes