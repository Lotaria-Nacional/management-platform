import { Router } from "express"
import posRoutes from "./pos.routes"
import agentRoutes from "./agent.routes"
import terminalRoutes from "./terminal.routes"

const router = Router()

router.use("/pos",posRoutes)
router.use("/agents",agentRoutes)
router.use("/terminal",terminalRoutes)

export { router }
