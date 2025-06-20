import { Router } from "express"
import posRoutes from "./pos.routes"
import zoneRoutes from "./zone.routes"
import areaRoutes from "./area.routes"
import typeRoutes from "./type.routes"
import cityRoutes from "./city.routes"
import agentRoutes from "./agent.routes"
import subtypeRoutes from "./subtype.routes"
import licenceRoutes from "./licence.routes"
import terminalRoutes from "./terminal.routes"
import provinceRoutes from "./province.routes"
import supervisionRoutes from "./supervision.routes"
import adminstrationRoutes from "./administration.routes"
import userRoutes from "@/domain/user/presentation/routes/user-routes"
import { cloudflareRouter } from "./cloudflare-r2"
import auditLogRoutes from "@/domain/audit-log/presentation/routes/audit-log-routes"

const router = Router()



router.use("/pos", posRoutes)
router.use("/areas", areaRoutes)
router.use("/zones", zoneRoutes)
router.use("/types", typeRoutes)
router.use("/cities", cityRoutes)
router.use("/agents", agentRoutes)
router.use("/subtypes", subtypeRoutes)
router.use("/licences", licenceRoutes)
router.use("/terminals", terminalRoutes)
router.use("/provinces", provinceRoutes)
router.use("/supervisions", supervisionRoutes)
router.use("/administrations", adminstrationRoutes)
router.use("/users", userRoutes)
router.use("/cloudflare", cloudflareRouter)
router.use("/audit-logs", auditLogRoutes)

export { router }
