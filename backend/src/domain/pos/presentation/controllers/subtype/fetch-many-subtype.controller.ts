import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/core/presentation/http"
import { FetchManySubtypeUseCase } from "@/domain/pos/application/use-cases/subtype/fetch-many-subtype.useCase"

export class FetchManySubtypeController implements IController<any> {
  constructor(private useCase: FetchManySubtypeUseCase) {}

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
