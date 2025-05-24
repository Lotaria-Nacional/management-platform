import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { PrismaTypeRepository } from "@/domain/pos/infra/repository/prisma-type.repository"
import { FetchManyTypeUseCase } from "@/domain/pos/application/use-cases/type/fetch-many-type.useCase"
import { FetchManyTypeController } from "@/domain/pos/presentation/controllers/type/fetch-many-type.controller"

const typeRoutes = express.Router()

const repository = new PrismaTypeRepository()
const useCase = new FetchManyTypeUseCase(repository)
const controller = new FetchManyTypeController(useCase)

typeRoutes.get("/", expressRouteAdapter(controller))

export default typeRoutes
