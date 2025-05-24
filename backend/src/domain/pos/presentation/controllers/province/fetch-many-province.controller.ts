import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyProvinceUseCase } from "@/domain/pos/application/use-cases/province/fetch-many-province.useCase"

export class FetchManyProvinceController implements IController<any> {
  constructor(private useCase: FetchManyProvinceUseCase) {}

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
