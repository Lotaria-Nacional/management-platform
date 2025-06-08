import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { RemoveLicenceUseCase } from "@/domain/pos/application/use-cases/licence/remove-licence.useCase"

export class RemoveLicenceController implements IController<any> {
  constructor(private useCase: RemoveLicenceUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)
      await this.useCase.execute(id)

      return {
        statusCode: HttpStatusCode.OK,
        body: {
          message: "Licença removida com sucesso.",
        },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
