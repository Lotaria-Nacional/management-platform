import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { PrismaCityRepository } from "@/domain/pos/infra/repositories/prisma-city.repository"
import { FetchManyCityUseCase } from "@/domain/pos/application/use-cases/city/fetch-many-city.useCase"
import { FetchManyCityController } from "@/domain/pos/presentation/controllers/city/fetch-many-city.controller"

const cityRoutes = express.Router()

const repository = new PrismaCityRepository()
const useCase = new FetchManyCityUseCase(repository)
const controller = new FetchManyCityController(useCase)

cityRoutes.get("/", expressRouteAdapter(controller))

export default cityRoutes
