import { Router } from "express"
import posRoutes from "./pos.routes"
import agentRoutes from "./agent.routes"
import terminalRoutes from "./terminal.routes"
import revisionRoutes from "./revision.routes"

const router = Router()

router.use("/pos",posRoutes)
router.use("/agents",agentRoutes)
router.use("/terminals",terminalRoutes)
router.use("/revisions",revisionRoutes)

export { router }
