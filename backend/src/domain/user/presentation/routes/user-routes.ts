import express from "express"
import { BcryptService } from "@/core/infra/services/bcrypt-service"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makeUserControllers } from "@/main/factories/presentation/make-user-controllers"
import { UserPrismaRepository } from "@/domain/user/infra/repository/prisma-user-repository"

const userRoutes = express.Router()

const repository = new UserPrismaRepository()
const hashService = new BcryptService()

const { loginUserController, registerUserController } = makeUserControllers(repository,hashService)

userRoutes.post("/auth/sign-in", expressRouteAdapter(loginUserController))
userRoutes.post("/auth/sign-up", expressRouteAdapter(registerUserController))

export default userRoutes
