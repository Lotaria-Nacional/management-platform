import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyLicenceUseCase } from "@/domain/pos/application/use-cases/licence/fetch-many-licence.useCase"

export class FetchManyLicenceController implements IController<any> {
  constructor(private useCase: FetchManyLicenceUseCase) {}

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
