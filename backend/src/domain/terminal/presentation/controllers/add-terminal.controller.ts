import {
  IController,
  HttpRequest,
  HttpResponse,
} from "@/core/presentation/http"
import { AddTerminalRequestDTO } from "@/domain/terminal/application/dto/add-terminal.dto"
import { AddTerminalUseCase } from "@/domain/terminal/application/use-cases/add-terminal.useCase"

export class AddTerminalController
  implements IController<AddTerminalRequestDTO>
{
  constructor(private useCase: AddTerminalUseCase) {}

  async handle(
    request: HttpRequest<AddTerminalRequestDTO>
  ): Promise<HttpResponse> {
    try {
      if (!request.body) {
        return {
          body: {
            message: "Fill up all the required fields.",
          },
          statusCode: 400,
        }
      }

      const terminal = await this.useCase.execute(request.body)

      return {
        statusCode: 201,
        body: {
          message: "Created successfuly",
          data: terminal,
        },
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: {
          message: "Internal server error",
          error: error.message || error,
        },
      }
    }
  }
}