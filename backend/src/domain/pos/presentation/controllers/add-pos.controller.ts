import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import {
  addPosSchema,
  TAddPosDTO,
} from "../../application/validations/add-pos-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { AddPosUseCase } from "../../application/use-cases/add-pos.useCase"
import { handleControllerError } from "@/shared/utils/handle-controller-error"

export class AddPosController implements IController<TAddPosDTO> {
  constructor(private useCase: AddPosUseCase) {}

  async handle(request: HttpRequest<TAddPosDTO>): Promise<HttpResponse> {
    try {
      const body = addPosSchema.parse(request.body)

      await this.useCase.execute({ ...body })

      return {
        statusCode: HttpStatusCode.OK,
        body: {
          message: "POS adicionado com sucesso",
        },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
