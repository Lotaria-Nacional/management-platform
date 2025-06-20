import { makeAuditLogControllers } from "@/main/factories/presentation/make-audit-log-controllers";
import { Router } from "express";
import { PrismaAuditLogRepository } from "../../infrastructure/repositories/prisma/prisma-auditlog-repository";
import { expressRouteAdapter } from "@/main/adapters/express-route-adapter";

const auditLogRoutes = Router()
const repository = new PrismaAuditLogRepository()

const { fetchManyAuditLogController } = makeAuditLogControllers(repository)

auditLogRoutes.get("/",expressRouteAdapter(fetchManyAuditLogController))

export default auditLogRoutes