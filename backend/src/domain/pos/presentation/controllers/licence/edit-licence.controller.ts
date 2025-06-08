import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import { IEditLicenceDTO } from "@/domain/pos/application/dto/licence/edit-licence.dto"
import { EditLicenceUseCase } from "@/domain/pos/application/use-cases/licence/edit-licence.useCase"
import { handleControllerError } from "@/shared/utils/handle-controller-error"

export class EditLicenceController implements IController<IEditLicenceDTO> {
  constructor(private useCase: EditLicenceUseCase) {}

  async handle(request: HttpRequest<IEditLicenceDTO>): Promise<HttpResponse> {
    const id = request.params.id
    try {
      await this.useCase.execute({
        id,
        ...request.body,
      })

      return {
        statusCode: 200,
        body: {
          message: "Licença atualizada com sucesso",
        },
      }
    } catch (error: any) {
      return handleControllerError(error)
    }
  }
}
