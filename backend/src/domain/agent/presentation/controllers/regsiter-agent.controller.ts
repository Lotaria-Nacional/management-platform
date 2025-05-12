import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { IRegisterAgentRequestDTO } from "../../application/dto/register-agent.dto"
import { RegisterAgentUseCase } from "../../application/use-cases/register-agent.useCase"

export class RegisterAgentController
  implements IController<IRegisterAgentRequestDTO>
{
  constructor(private useCase: RegisterAgentUseCase) {}

  async handle(
    request: HttpRequest<IRegisterAgentRequestDTO>
  ): Promise<HttpResponse> {
    try {
      if (!request.body) {
        return {
          body: { message: "Preencha os campos obrigatórios." },
          statusCode: 400,
        }
      }

      const res = request.body
      await this.useCase.execute({ ...res, status: "ACTIVE", area: "16" })

      return {
        body: {
          message: "Created Successfuly",
        },
        statusCode: 201,
      }
    } catch (error) {
      return {
        body: {
          message: "Internal Server Error",
          error,
        },
        statusCode: 500,
      }
    }
  }
}
