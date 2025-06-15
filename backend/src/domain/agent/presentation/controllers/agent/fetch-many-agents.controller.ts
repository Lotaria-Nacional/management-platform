import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { QueryParamsSchema } from "@/core/validations/common/query.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { FetchManyAgentsUseCase } from "../../../application/use-cases/agent/fetch-many-agents.useCase"

export class FetchManyAgentsController implements IController<any> {
  constructor(private useCase: FetchManyAgentsUseCase) {}

  async handle(req: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const query = QueryParamsSchema.parse(req.query)

      const response = await this.useCase.execute(query)

      return {
        body: response,
        statusCode: HttpStatusCode.OK,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
