import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { RemoveTerminalUseCase } from "../../application/use-cases/remove-terminal.useCase"

export class RemoveTerminalController implements IController<any> {
  constructor(private useCase: RemoveTerminalUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)

      await this.useCase.execute(id)

      return {
        statusCode: HttpStatusCode.OK,
        body: { message: "Terminal removido com sucesso" },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
