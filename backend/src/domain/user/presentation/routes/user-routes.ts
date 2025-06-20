import express from "express"
import { BcryptService } from "@/core/infra/services/bcrypt-service"
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter"
import { makeUserControllers } from "@/main/factories/presentation/make-user-controllers"
import { UserPrismaRepository } from "@/domain/user/infra/repository/prisma-user-repository"
import { AuditLogService } from "@/domain/audit-log/enterprise/services/audit-log-service"
import { PrismaAuditLogRepository } from "@/domain/audit-log/infrastructure/repositories/prisma/prisma-auditlog-repository"

const userRoutes = express.Router()

const repository = new UserPrismaRepository()
const auditLogRepository = new PrismaAuditLogRepository()
const hashService = new BcryptService()
const auditLogService = new AuditLogService(auditLogRepository)

const { loginUserController, registerUserController } = makeUserControllers(repository,hashService, auditLogService)

userRoutes.post("/auth/sign-in", expressRouteAdapter(loginUserController))
userRoutes.post("/auth/sign-up", expressRouteAdapter(registerUserController))

export default userRoutes
