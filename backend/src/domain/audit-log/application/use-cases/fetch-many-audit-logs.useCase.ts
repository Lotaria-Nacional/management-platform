import { IAuditLogRepository } from "../interface/audit-log-repository.interface";

export class FetchManyAuditLogsUseCase {
    constructor(private repository:IAuditLogRepository){}

    async execute(){
        const auditLogs = await this.repository.fetchMany()

        return auditLogs
    }
}