import { Router } from "express"
import { upload } from "@/shared/middleware/upload"
import { expressRouteAdapter } from "../adapters/express-route-adapter"
import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository"
import { makeFetchTerminalController } from "../factories/presentation/terminals/make-fetch-terminal-controller"
import { makeUploadTerminalController } from "../factories/presentation/terminals/make-upload-terminal-controller"

const terminalRoutes = Router()
const inMemoryTerminalsRepository = new InMemoryTerminalRepository()

const { uploadTerminalController } = makeUploadTerminalController(inMemoryTerminalsRepository)
const { fetchTerminalController } = makeFetchTerminalController(inMemoryTerminalsRepository)

terminalRoutes.post("/upload", upload.single('file'), expressRouteAdapter(uploadTerminalController))
terminalRoutes.get("/all", expressRouteAdapter(fetchTerminalController))

export default  terminalRoutes