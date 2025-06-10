import {
  TMakeSupervisionDTO,
  makeSupervisionSchema,
} from "@/domain/agent/application/validations/supervision/make-supervision-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { MakeSupervisionUseCase } from "@/domain/agent/application/use-cases/supervision/make-supervision.useCase"

export class MakeSupervisionController implements IController<TMakeSupervisionDTO> {
  constructor(private useCase: MakeSupervisionUseCase) {}

  async handle(request: HttpRequest<TMakeSupervisionDTO>): Promise<HttpResponse> {
    try {
      const body = makeSupervisionSchema.parse(request.body)

      await this.useCase.execute(body)

      return {
        statusCode: HttpStatusCode.CREATED,
        body: {
          message: "Supervisão realizada com sucesso.",
        },
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
