import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { GetLicenceByIdUseCase } from "@/domain/pos/application/use-cases/licence/get-licence-by-id.useCase"

export class GetLicenceByIdController implements IController<any> {
  constructor(private useCase: GetLicenceByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    const id = request.params.id
    try {
      const data = await this.useCase.execute(id)

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
