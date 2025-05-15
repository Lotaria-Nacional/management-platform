import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makeRevisionControllers } from "../factories/presentation/make-revision"
import { PrismaRevisionRepository } from "@/domain/agent/infra/interfaces/prisma-revision.repository"

const revisionRoutes = express.Router()
const prismaRevisionRepository = new PrismaRevisionRepository()

const { makeRevisionController, fetchManyRevisionsController, removeRevisionController, getRevisionByIdController } = makeRevisionControllers(prismaRevisionRepository)

revisionRoutes.post("/", expressRouteAdapter(makeRevisionController))
revisionRoutes.get("/", expressRouteAdapter(fetchManyRevisionsController))
revisionRoutes.get("/:id", expressRouteAdapter(getRevisionByIdController))
revisionRoutes.delete("/:id", expressRouteAdapter(removeRevisionController))

export default revisionRoutes
