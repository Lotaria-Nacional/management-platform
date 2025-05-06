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
const { addTerminalController } = makeTerminalController.addTerminal()
const { editTerminalController } = makeTerminalController.editTermial()

terminalRoutes.post("/register",  expressRouteAdapter(addTerminalController))
terminalRoutes.post("/upload", upload.single('file'), expressRouteAdapter(uploadTerminalController))
terminalRoutes.get("/all", expressRouteAdapter(fetchTerminalController))
terminalRoutes.put("/:id",  expressRouteAdapter(editTerminalController))

export default  terminalRoutes