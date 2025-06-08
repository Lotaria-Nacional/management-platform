import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { GetRevisionByIdUseCase } from "@/domain/agent/application/use-cases/revision/get-revision-by-id.useCase"

export class GetRevisionByIdController implements IController<any> {
  constructor(private useCase: GetRevisionByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)

      const { revision } = await this.useCase.execute(id)

      return {
        body: revision,
        statusCode: HttpStatusCode.OK,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
