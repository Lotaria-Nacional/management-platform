import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyZoneUseCase } from "@/domain/pos/application/use-cases/zone/fetch-many-zone.useCase"

export class FetchManyZoneController implements IController<any> {
  constructor(private useCase: FetchManyZoneUseCase) {}

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
