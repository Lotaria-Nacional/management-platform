import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { FetchManyTypeUseCase } from "@/domain/pos/application/use-cases/type/fetch-many-type.useCase"

export class FetchManyTypeController implements IController<any> {
  constructor(private useCase: FetchManyTypeUseCase) {}

  async handle(_request: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const response = await this.useCase.execute()

      return {
        statusCode: 200,
        body: response,
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { message: "Internal Server Error", error },
      }
    }
  }
}
