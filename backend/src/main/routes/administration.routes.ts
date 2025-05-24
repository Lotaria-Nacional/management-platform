import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { PrismaAdministrationRepository } from "@/domain/pos/infra/repository/prisma-administration.repository"
import { FetchManyAdministrationUseCase } from "@/domain/pos/application/use-cases/administration/fetch-many-administration.useCase"
import { FetchManyAdministrationController } from "@/domain/pos/presentation/controllers/administration/fetch-many-administration.controller"

const adminstrationRoutes = express.Router()

const repository = new PrismaAdministrationRepository()
const useCase = new FetchManyAdministrationUseCase(repository)
const controller = new FetchManyAdministrationController(useCase)

adminstrationRoutes.get("/", expressRouteAdapter(controller))

export default adminstrationRoutes
