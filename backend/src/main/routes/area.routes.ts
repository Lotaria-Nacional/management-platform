import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { FetchManyAreaUseCase } from "@/domain/pos/application/use-cases/area/fetch-many-area.useCase"
import { FetchManyAreaController } from "@/domain/pos/presentation/controllers/area/fetch-many-area.controller"
import { PrismaAreaRepository } from "@/domain/pos/infra/repository/prisma-area.repository"

const areaRoutes = express.Router()

const repository = new PrismaAreaRepository()
const useCase = new FetchManyAreaUseCase(repository)
const controller = new FetchManyAreaController(useCase)

areaRoutes.get("/", expressRouteAdapter(controller))

export default areaRoutes
