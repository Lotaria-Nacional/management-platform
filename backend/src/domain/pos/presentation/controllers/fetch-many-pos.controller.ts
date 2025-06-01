import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyPosUseCase } from "../../application/use-cases/fetch-many-pos.useCase"

export class FetchManyPosController implements IController<any> {
  constructor(private useCase: FetchManyPosUseCase) {}

  async handle(req: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const page = req.query.page ? parseInt(req.query.page) : undefined
      const limit = req.query.limit ? parseInt(req.query.limit) : undefined

      const result = await this.useCase.execute({ page, limit })

      return {
        statusCode: 200,
        body: result,
      }
    } catch (error) {
      console.error("[FetchManyPosController]", error)
      return {
        statusCode: 500,
        body: {
          message: "Internal server error",
          error: error,
        },
      }
    }
  }
}
