import {
  editLicenceSchema,
  TEditLicenceDTO,
} from "@/domain/pos/application/validations/licence/edit-licence-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { EditLicenceUseCase } from "@/domain/pos/application/use-cases/licence/edit-licence.useCase"

export class EditLicenceController implements IController<TEditLicenceDTO> {
  constructor(private useCase: EditLicenceUseCase) {}

  async handle(request: HttpRequest<TEditLicenceDTO>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)
      const body = editLicenceSchema.parse({ ...request.body, id })

      await this.useCase.execute({ ...body })

      return {
        statusCode: HttpStatusCode.OK,
        body: {
          message: "Licença atualizada com sucesso",
        },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
