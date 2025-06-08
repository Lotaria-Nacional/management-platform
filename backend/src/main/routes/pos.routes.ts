import express from "express"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makePosControllers } from "../factories/presentation/make-pos-controllers"
import { PrismaPosRepository } from "@/domain/pos/infra/repositories/prisma-pos.repository"

const posRoutes = express.Router()
const repository = new PrismaPosRepository()

const {
  addPosController,
  editPosController,
  fetchManyPosController,
  getPosByIdController,
  removePosController,
} = makePosControllers(repository)

posRoutes.post("/", expressRouteAdapter(addPosController))
posRoutes.get("/", expressRouteAdapter(fetchManyPosController))
posRoutes.get("/:id", expressRouteAdapter(getPosByIdController))
posRoutes.put("/:id", expressRouteAdapter(editPosController))
posRoutes.delete("/:id", expressRouteAdapter(removePosController))

export default posRoutes
