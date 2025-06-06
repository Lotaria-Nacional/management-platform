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
import revisionRoutes from "./revision.routes"
import provinceRoutes from "./province.routes"
import adminstrationRoutes from "./administration.routes"

const router = Router()

router.use("/pos", posRoutes)
router.use("/agents", agentRoutes)
router.use("/terminals", terminalRoutes)
router.use("/revisions", revisionRoutes)
router.use("/areas", areaRoutes)
router.use("/zones", zoneRoutes)
router.use("/cities", cityRoutes)
router.use("/licences", licenceRoutes)
router.use("/provinces", provinceRoutes)
router.use("/types", typeRoutes)
router.use("/subtypes", subtypeRoutes)
router.use("/administrations", adminstrationRoutes)

export { router }
