import { IAuditLogRepository } from "@/domain/audit-log/application/interface/audit-log-repository.interface"
import { FetchManyAuditLogsUseCase } from "@/domain/audit-log/application/use-cases/fetch-many-audit-logs.useCase"
import { FetchManyAuditLogsController } from "@/domain/audit-log/presentation/controllers/fetch-many-audit-logs.controller"


export function makeAuditLogControllers(
  repository: IAuditLogRepository,
) {
  const fetchManyAuditLogController = new FetchManyAuditLogsController(new FetchManyAuditLogsUseCase(repository))
    return { fetchManyAuditLogController }
}
