import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchTerminalsUseCase } from "../../application/use-cases/fetch-terminal.useCase"

export class FetchTerminalsController implements IController<any> {
  constructor(private useCase: FetchTerminalsUseCase) {}

  async handle(_request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const { terminals } = await this.useCase.execute()

      return {
        statusCode: 200,
        body: terminals,
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
