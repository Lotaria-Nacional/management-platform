import { HttpStatusCode } from "@/core/http/http-status-code"
import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import { QueryParamsSchema } from "@/core/validations/common/query.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { FetchManyPosUseCase } from "../../application/use-cases/fetch-many-pos.useCase"

export class FetchManyPosController implements IController<any> {
  constructor(private useCase: FetchManyPosUseCase) {}

  async handle(req: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const query = QueryParamsSchema.parse(req.query)

      const response = await this.useCase.execute(query)

      return {
        statusCode: HttpStatusCode.OK,
        body: response,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
