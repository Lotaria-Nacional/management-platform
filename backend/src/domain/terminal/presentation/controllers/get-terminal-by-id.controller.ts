import { HttpRequest, IController, HttpResponse } from "@/core/http/http"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { GetTerminalByIdUseCase } from "../../application/use-cases/get-terminal-by-id.useCase"

export class GetTerminalByIdController implements IController<any> {
  constructor(private useCase: GetTerminalByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)
      const { terminal } = await this.useCase.execute(id)

      return {
        body: terminal,
        statusCode: HttpStatusCode.OK,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
