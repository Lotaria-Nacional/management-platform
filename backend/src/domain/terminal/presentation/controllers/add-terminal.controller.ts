import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import {
  TAddTerminalDTO,
  addTerminalSchema,
} from "../../application/validations/add-terminal-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { AddTerminalUseCase } from "@/domain/terminal/application/use-cases/add-terminal.useCase"

export class AddTerminalController implements IController<TAddTerminalDTO> {
  constructor(private useCase: AddTerminalUseCase) {}

  async handle(request: HttpRequest<TAddTerminalDTO>): Promise<HttpResponse> {
    try {
      const body = addTerminalSchema.parse(request.body)

      await this.useCase.execute(body)

      return {
        statusCode: HttpStatusCode.OK,
        body: { message: "Terminal adicionado com sucesso" },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
