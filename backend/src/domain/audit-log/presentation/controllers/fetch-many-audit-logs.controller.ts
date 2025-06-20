import { HttpRequest, HttpResponse, IController } from "@/core/http/http";
import { handleControllerError } from "@/shared/utils/handle-controller-error";
import { FetchManyAuditLogsUseCase } from "../../application/use-cases/fetch-many-audit-logs.useCase";

export class FetchManyAuditLogsController implements IController {
    constructor(private useCase:FetchManyAuditLogsUseCase){}
    async handle(_request: HttpRequest<any>): Promise<HttpResponse> {
        try {
            const auditLogs = await this.useCase.execute()
            
            return {
                statusCode:200,
                body:auditLogs,
            }
        } catch (error) {
            return handleControllerError(error)
        }
    }
}