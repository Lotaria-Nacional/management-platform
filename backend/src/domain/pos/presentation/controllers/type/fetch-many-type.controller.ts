import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyTypeUseCase } from "@/domain/pos/application/use-cases/type/fetch-many-type.useCase"

export class FetchManyTypeController implements IController<any> {
  constructor(private useCase: FetchManyTypeUseCase) {}

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
