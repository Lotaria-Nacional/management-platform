import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyAreaUseCase } from "@/domain/pos/application/use-cases/area/fetch-many-area.useCase"

export class FetchManyAreaController implements IController<any> {
  constructor(private useCase: FetchManyAreaUseCase) {}

  async handle(_request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const data = await this.useCase.execute()

      return {
        statusCode: 200,
        body: data,
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { message: "Internal Server Error", error },
      }
    }
  }
}
