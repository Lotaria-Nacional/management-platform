import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makeLicenceControllers } from "../factories/presentation/make-licence-controllers"
import { PrismaLicenceRepository } from "@/domain/pos/infra/repository/prisma-licence.repository"

const licenceRoutes = express.Router()

const repository = new PrismaLicenceRepository()

const {
    addLicenceController,
    editLicenceController,
    fetchManyLicenceController,
    getLicenceByIdController,
    removeLicenceController
} = makeLicenceControllers(repository)


licenceRoutes.post("/", expressRouteAdapter(addLicenceController))
licenceRoutes.get("/", expressRouteAdapter(fetchManyLicenceController))
licenceRoutes.get("/:id", expressRouteAdapter(getLicenceByIdController))
licenceRoutes.put("/:id", expressRouteAdapter(editLicenceController))
licenceRoutes.delete("/:id", expressRouteAdapter(removeLicenceController))

export default licenceRoutes
