import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { RemoveLicenceUseCase } from "@/domain/pos/application/use-cases/licence/remove-licence.useCase"

export class RemoveLicenceController implements IController<any> {
  constructor(private useCase: RemoveLicenceUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    const id = request.params.id
    try {
      await this.useCase.execute(id)

      return {
        statusCode: 200,
        body: {
          message: "Licença removida com sucesso.",
        },
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { message: "Internal Server Error", error },
      }
    }
  }
}
