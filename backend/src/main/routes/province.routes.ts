import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { FetchManyProvinceUseCase } from "@/domain/pos/application/use-cases/province/fetch-many-province.useCase"
import { FetchManyProvinceController } from "@/domain/pos/presentation/controllers/province/fetch-many-province.controller"
import { PrismaProvinceRepository } from "@/domain/pos/infra/repositories/prisma-province.repository"

const provinceRoutes = express.Router()

const repository = new PrismaProvinceRepository()
const useCase = new FetchManyProvinceUseCase(repository)
const controller = new FetchManyProvinceController(useCase)

provinceRoutes.get("/", expressRouteAdapter(controller))

export default provinceRoutes
