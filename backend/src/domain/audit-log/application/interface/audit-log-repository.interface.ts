import { AuditLog } from "@/domain/audit-log/enterprise/entities/audit-log.entity";

export interface IAuditLogRepository {
    create(auditLog:AuditLog):Promise<void>
    fetchMany():Promise<AuditLog[]>
}