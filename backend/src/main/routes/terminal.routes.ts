import { Router } from "express"
import { upload } from "@/shared/middleware/upload"
import { expressRouteAdapter } from "../adapters/express-route-adapter"
import { makeUploadTerminalController } from "../factories/presentation/make-upload-terminal-controller"

const terminalRoutes = Router()

const { uploadTerminalController } = makeUploadTerminalController()

terminalRoutes.post("/upload", upload.single('file'), expressRouteAdapter(uploadTerminalController))

export default  terminalRoutes