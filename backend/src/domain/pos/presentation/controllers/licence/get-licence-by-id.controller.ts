import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { GetLicenceByIdUseCase } from "@/domain/pos/application/use-cases/licence/get-licence-by-id.useCase"

export class GetLicenceByIdController implements IController<any> {
  constructor(private useCase: GetLicenceByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)
      const response = await this.useCase.execute(id)

      return {
        statusCode: HttpStatusCode.OK,
        body: response,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
