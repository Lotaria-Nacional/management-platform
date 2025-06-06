import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManyLicenceUseCase } from "@/domain/pos/application/use-cases/licence/fetch-many-licence.useCase"

export class FetchManyLicenceController implements IController<any> {
  constructor(private useCase: FetchManyLicenceUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    const page  =  request.query.page ? parseInt(request.query.page) : undefined
    const limit =  request.query.limit ? parseInt(request.query.limit) : undefined

    try {
      const data = await this.useCase.execute({ limit, page})

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
