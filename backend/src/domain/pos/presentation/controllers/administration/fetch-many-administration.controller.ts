import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { FetchManyAdministrationUseCase } from "@/domain/pos/application/use-cases/administration/fetch-many-administration.useCase"

export class FetchManyAdministrationController implements IController<any> {
  constructor(private useCase: FetchManyAdministrationUseCase) {}

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
