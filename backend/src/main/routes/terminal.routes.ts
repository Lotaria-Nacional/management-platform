import { Router } from "express"
import { upload } from "@/shared/middleware/upload"
import { expressRouteAdapter } from "../adapters/express-route-adapter"
import { MakeTerminalController } from "../factories/presentation/make-terminal"
import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository"

const terminalRoutes = Router()

const inMemoryTerminalsRepository = new InMemoryTerminalRepository()
const makeTerminalController = new MakeTerminalController(inMemoryTerminalsRepository)

const { uploadTerminalController } = makeTerminalController.uploadTerminal()
const { fetchTerminalController } = makeTerminalController.fetchTerminal()

terminalRoutes.post("/upload", upload.single('file'), expressRouteAdapter(uploadTerminalController))
terminalRoutes.get("/all", expressRouteAdapter(fetchTerminalController))

export default  terminalRoutes