import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { PrismaLicenceRepository } from "@/domain/pos/infra/repository/prisma-licence.repository"
import { FetchManyLicenceUseCase } from "@/domain/pos/application/use-cases/licence/fetch-many-licence.useCase"
import { FetchManyLicenceController } from "@/domain/pos/presentation/controllers/licence/fetch-many-licence.controller"

const licenceRoutes = express.Router()

const repository = new PrismaLicenceRepository()
const useCase = new FetchManyLicenceUseCase(repository)
const controller = new FetchManyLicenceController(useCase)

licenceRoutes.get("/", expressRouteAdapter(controller))

export default licenceRoutes
