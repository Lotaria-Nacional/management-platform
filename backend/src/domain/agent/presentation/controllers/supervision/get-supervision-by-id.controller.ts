import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { GetSupervisionByIdUseCase } from "@/domain/agent/application/use-cases/supervision/get-supervision-by-id.useCase"

export class GetSupervisionByIdController implements IController<any> {
  constructor(private useCase: GetSupervisionByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)

      const { supervision } = await this.useCase.execute(id)

      return {
        body: supervision,
        statusCode: HttpStatusCode.OK,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
