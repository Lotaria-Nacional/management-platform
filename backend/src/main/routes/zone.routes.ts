import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { FetchManyZoneUseCase } from "@/domain/pos/application/use-cases/zone/fetch-many-zone.useCase"
import { FetchManyZoneController } from "@/domain/pos/presentation/controllers/zone/fetch-many-zone.controller"
import { PrismaZoneRepository } from "@/domain/pos/infra/repositories/prisma-zone.repository"

const zoneRoutes = express.Router()

const repository = new PrismaZoneRepository()
const useCase = new FetchManyZoneUseCase(repository)
const controller = new FetchManyZoneController(useCase)

zoneRoutes.get("/", expressRouteAdapter(controller))

export default zoneRoutes
