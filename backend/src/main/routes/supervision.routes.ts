import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makeSupervisionControllers } from "../factories/presentation/make-supervision-controllers"
import { PrismaSupervisionRepository } from "@/domain/agent/infra/repositories/prisma-supervision.repository"

const revisionRoutes = express.Router()
const repository = new PrismaSupervisionRepository()

const {
  makeSupervisionController,
  removeSupervisionController,
  getSupervisionByIdController,
  fetchManySupervisionController,
} = makeSupervisionControllers(repository)

revisionRoutes.post("/", expressRouteAdapter(makeSupervisionController))
revisionRoutes.get("/", expressRouteAdapter(fetchManySupervisionController))
revisionRoutes.get("/:id", expressRouteAdapter(getSupervisionByIdController))
revisionRoutes.delete("/:id", expressRouteAdapter(removeSupervisionController))

export default revisionRoutes
