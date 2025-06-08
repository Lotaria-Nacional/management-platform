import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import {
  TEditTerminalDTO,
  editTerminalSchema,
} from "../../application/validations/edit-terminal-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { EditTerminalUseCase } from "../../application/use-cases/edit-terminal.useCase"

export class EditTerminalController implements IController<TEditTerminalDTO> {
  constructor(private useCase: EditTerminalUseCase) {}

  async handle(request: HttpRequest<TEditTerminalDTO>): Promise<HttpResponse> {
    try {
      const { id } = IdParamsSchema.parse(request.params)

      const body = editTerminalSchema.parse({ ...request.body, id })

      await this.useCase.execute({ ...body, id })

      return {
        statusCode: HttpStatusCode.OK,
        body: { message: "Terminal atualizado com sucesso" },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
