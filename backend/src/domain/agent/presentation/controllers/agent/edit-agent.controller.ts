import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import {
  editAgentSchema,
  TEditAgentDTO,
} from "@/domain/agent/application/validations/agent/edit-agent-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { EditAgentUseCase } from "@/domain/agent/application/use-cases/agent/edit-agent.useCase"

export class EditAgentController implements IController<TEditAgentDTO> {
  constructor(private useCase: EditAgentUseCase) {}

  async handle(request: HttpRequest<TEditAgentDTO>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)

      const body = editAgentSchema.parse({ ...request.body, id })

      await this.useCase.execute({ ...body })

      return {
        body: {
          message: "Agente atualizado com sucesso",
        },
        statusCode: HttpStatusCode.OK,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
