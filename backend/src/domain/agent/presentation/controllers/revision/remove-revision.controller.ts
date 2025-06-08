import { HttpStatusCode } from "@/core/http/http-status-code"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { RemoveRevisionUseCase } from "@/domain/agent/application/use-cases/revision/remove-revision.useCase"

export class RemoveRevisionController implements IController<any> {
  constructor(private useCase: RemoveRevisionUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)

      await this.useCase.execute(id)

      return {
        statusCode: HttpStatusCode.OK,
        body: {
          message: "Supervisão removida com sucesso",
        },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
