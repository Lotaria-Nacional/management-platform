import {
  IController,
  HttpRequest,
  HttpResponse,
} from "@/core/presentation/http"
import { FetchTerminalsUseCase } from "../../application/use-cases/fetch-terminal.useCase"

export class FetchTerminalsController implements IController<any> {
  constructor(private useCase: FetchTerminalsUseCase) {}

  async handle(req: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const page = req.query.page ? parseInt(req.query.page) : undefined
      const limit = req.query.limit ? parseInt(req.query.limit) : undefined

      const result = await this.useCase.execute({ page, limit })

      return {
        statusCode: 200,
        body: result,
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
