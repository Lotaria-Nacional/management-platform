import { prisma } from "@/core/infra/database/prisma/prisma.config";
import { AuditLog } from "@/domain/audit-log/enterprise/entities/audit-log.entity";
import { AuditLogsActionType } from "@/domain/audit-log/enterprise/enums/audit-log-actions";
import { IAuditLogRepository } from "@/domain/audit-log/application/interface/audit-log-repository.interface";

export class PrismaAuditLogRepository implements IAuditLogRepository {
    async create(auditLog: AuditLog): Promise<void> {
        await prisma.auditLog.create({
            data:{
                action:auditLog.action,
                entity:auditLog.entity,
                entity_id:auditLog.entity,
                metadata:auditLog.metadata,
                user_id:auditLog.user_id,
                timestamp:auditLog.timestamp
            }
        })
    }

    async fetchMany(): Promise<AuditLog[]> {
        const auditLogs = await prisma.auditLog.findMany()
        return auditLogs.map((auditLog)=> AuditLog.create({
            action:auditLog.action as AuditLogsActionType,
            entity:auditLog.entity,
            entity_id:auditLog.entity,
            metadata:auditLog.metadata as Record<string, string>,
            timestamp:auditLog.timestamp,
            user_id:auditLog.user_id
        }))
    }
}