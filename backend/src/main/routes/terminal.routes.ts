import { Router } from "express"
import { expressRouteAdapter } from "../adapters/express-route-adapter"
import { makeTerminalControllers } from "../factories/presentation/make-terminal"
import { PrismaTerminalRepository } from "@/domain/terminal/infra/interfaces/prisma/prisma-terminal.repository"

const terminalRoutes = Router()

const prismaTerminalRepository = new PrismaTerminalRepository()
const {
  addTerminalController,
  editTerminalController,
  fetchManyTerminalsController,
  getTerminalByIdController,
  removeTerminalController,
} = makeTerminalControllers(prismaTerminalRepository)

terminalRoutes.post("/", expressRouteAdapter(addTerminalController))
terminalRoutes.get("/", expressRouteAdapter(fetchManyTerminalsController))
terminalRoutes.get("/:id", expressRouteAdapter(getTerminalByIdController))
terminalRoutes.put("/:id", expressRouteAdapter(editTerminalController))
terminalRoutes.delete("/:id", expressRouteAdapter(removeTerminalController))

export default terminalRoutes
