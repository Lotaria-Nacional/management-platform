import { HttpStatusCode } from "@/core/http/http-status-code"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { QueryParamsSchema } from "@/core/validations/common/query.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { FetchManyLicencesUseCase } from "@/domain/pos/application/use-cases/licence/fetch-many-licences.useCase"

export class FetchManyLicenceController implements IController<any> {
  constructor(private useCase: FetchManyLicencesUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { page, limit } = QueryParamsSchema.parse(request.query)
      const response = await this.useCase.execute({ limit, page })

      return {
        body: response,
        statusCode: HttpStatusCode.OK,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
