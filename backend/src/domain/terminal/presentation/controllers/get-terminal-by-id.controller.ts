import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { GetTerminalByIdUseCase } from "../../application/use-cases/get-terminal-by-id.useCase"

export class GetTerminalByIdController implements IController<any> {
  constructor(private useCase: GetTerminalByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { id } = request.params
      const { terminal } = await this.useCase.execute(id)

      return {
        statusCode: 200,
        body: terminal,
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
