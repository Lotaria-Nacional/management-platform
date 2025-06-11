import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { GetAgentByIdUseCase } from "@/domain/agent/application/use-cases/agent/get-agent-by-id.useCase"

export class GetAgentByIdController implements IController<any> {
  constructor(private useCase: GetAgentByIdUseCase) {}

  async handle(req: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(req.params)

      const response = await this.useCase.execute(id)

      return { body: response, statusCode: HttpStatusCode.OK }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}