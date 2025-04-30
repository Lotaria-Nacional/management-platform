import express  from 'express'
import { upload } from '@/shared/middleware/upload'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { InMemoryPosRepository } from '@test/infrastructure/in-memory-pos.repository'
import { makeFetchPosController } from '../factories/presentation/pos/make-fetch-pos-controller'
import { makeUploadPosController } from '../factories/presentation/pos/make-upload-pos-controller'

const posRoutes = express.Router()

const inMemoryPosRepository = new InMemoryPosRepository()

const { uploadPosController } = makeUploadPosController(inMemoryPosRepository)
const { fetchPosController } = makeFetchPosController(inMemoryPosRepository)

posRoutes.post("/upload", upload.single("file"), expressRouteAdapter(uploadPosController))
posRoutes.get("/all", expressRouteAdapter(fetchPosController))

export default posRoutes