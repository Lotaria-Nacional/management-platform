import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { QueryParamsSchema } from "@/core/validations/common/query.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { FetchManyRevisionsUseCase } from "@/domain/agent/application/use-cases/revision/fetch-many-revisions.useCase"

export class FetchManyRevisionsController implements IController<void> {
  constructor(private useCase: FetchManyRevisionsUseCase) {}

  async handle(request: HttpRequest<void>): Promise<HttpResponse> {
    try {
      const { page, limit } = QueryParamsSchema.parse(request.query)

      const response = await this.useCase.execute({ page, limit })

      return {
        statusCode: HttpStatusCode.OK,
        body: response,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
