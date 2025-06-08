import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import {
  TRegisterAgentDTO,
  registerAgentSchema,
} from "@/domain/agent/application/validations/agent/register-agent-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { RegisterAgentUseCase } from "@/domain/agent/application/use-cases/agent/register-agent.useCase"

export class RegisterAgentController implements IController<TRegisterAgentDTO> {
  constructor(private useCase: RegisterAgentUseCase) {}

  async handle(request: HttpRequest<TRegisterAgentDTO>): Promise<HttpResponse> {
    try {
      const body = registerAgentSchema.parse(request.body)

      await this.useCase.execute({ ...body })

      return {
        body: { message: "Agent criado com sucesso" },
        statusCode: HttpStatusCode.CREATED,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
