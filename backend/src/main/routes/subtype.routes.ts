import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { PrismaSubtypeRepository } from "@/domain/pos/infra/repository/prisma-subtype.repository"
import { FetchManySubtypeUseCase } from "@/domain/pos/application/use-cases/subtype/fetch-many-subtype.useCase"
import { FetchManySubtypeController } from "@/domain/pos/presentation/controllers/subtype/fetch-many-subtype.controller"

const subtypeRoutes = express.Router()

const repository = new PrismaSubtypeRepository()
const useCase = new FetchManySubtypeUseCase(repository)
const controller = new FetchManySubtypeController(useCase)

subtypeRoutes.get("/", expressRouteAdapter(controller))

export default subtypeRoutes
