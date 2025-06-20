import { AuditLogProps } from "../entities/audit-log.entity";

export interface IAuditLogService {
    log(options: AuditLogProps): Promise<void>
  }