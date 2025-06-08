import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { AddLicenceUseCase } from "@/domain/pos/application/use-cases/licence/add-licence.useCase"
import {
  addLicenceSchema,
  TAddLicenceDTO,
} from "@/domain/pos/application/validations/licence/add-licence-schema"

export class AddLicenceController implements IController<TAddLicenceDTO> {
  constructor(private useCase: AddLicenceUseCase) {}

  async handle(request: HttpRequest<TAddLicenceDTO>): Promise<HttpResponse> {
    try {
      const body = addLicenceSchema.parse(request.body)

      await this.useCase.execute({ ...body })

      return {
        statusCode: HttpStatusCode.OK,
        body: { message: "Licença criada com sucesso" },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
