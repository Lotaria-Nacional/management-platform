import { IAuditLogService } from "./audit-log-service.interface"
import { IAuditLogRepository } from "../../application/interface/audit-log-repository.interface"
import { AuditLog, AuditLogProps } from "../entities/audit-log.entity"

export class AuditLogService implements IAuditLogService {
  constructor(private auditRepo: IAuditLogRepository) {}

  async log(options: AuditLogProps): Promise<void> {
        const auditLog = AuditLog.create(options)

    await this.auditRepo.create(auditLog)
                                
  }
}
