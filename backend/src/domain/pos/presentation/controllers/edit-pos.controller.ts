import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import {
  editPosSchema,
  TEditPosDTO,
} from "../../application/validations/edit-pos-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { EditPosUseCase } from "../../application/use-cases/edit-pos.useCase"
import { handleControllerError } from "@/shared/utils/handle-controller-error"

export class EditPosController implements IController<TEditPosDTO> {
  constructor(private useCase: EditPosUseCase) {}

  async handle(request: HttpRequest<TEditPosDTO>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)
      const body = editPosSchema.parse({ ...request.body, id })

      await this.useCase.execute({ ...body, id })

      return {
        statusCode: HttpStatusCode.OK,
        body: {
          message: "POS atualizado com sucesso",
        },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
