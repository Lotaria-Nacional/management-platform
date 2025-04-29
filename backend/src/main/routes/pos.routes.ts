import express  from 'express'
import { upload } from '@/shared/middleware/upload'
import { expressRouteAdapter } from '@/main/adapters/express-route-adapter'
import { makeUploadPosController } from '../factories/presentation/make-upload-pos-controller'

const posRoutes = express.Router()

const { uploadPosController } = makeUploadPosController()

posRoutes.post("/upload", upload.single("file"), expressRouteAdapter(uploadPosController))

export default posRoutes