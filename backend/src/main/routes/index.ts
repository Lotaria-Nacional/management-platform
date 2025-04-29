import { Router } from "express"
import posRoutes from "./pos.routes"
import agentRoutes from "./agent.routes"

const router = Router()

router.use("/agents",agentRoutes)
router.use("/pos",posRoutes)

export { router }
