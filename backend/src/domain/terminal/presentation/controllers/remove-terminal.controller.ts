import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { RemoveTerminalUseCase } from "../../application/use-cases/remove-terminal.useCase"
import { IRemoveTerminalRequestDTO } from "../../application/dto/remove-terminal.dto"

export class RemoveTerminalController
  implements IController<IRemoveTerminalRequestDTO>
{
  constructor(private useCase: RemoveTerminalUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = request.params

      const result = await this.useCase.execute({ ...request.body, id })

      return {
        statusCode: 200,
        body: {
          message: "Removed Successfully",
          result,
        },
      }
    } catch (error) {
      return {
        body: {
          message: "Internal Server Error",
          error: error instanceof Error ? error.message : error,
        },
        statusCode: 500,
      }
    }
  }
}
