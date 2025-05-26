import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyCityUseCase } from "@/domain/pos/application/use-cases/city/fetch-many-city.useCase"

export class FetchManyCityController implements IController<any> {
  constructor(private useCase: FetchManyCityUseCase) {}

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
