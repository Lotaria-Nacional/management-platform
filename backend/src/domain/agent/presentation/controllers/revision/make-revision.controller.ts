import {
  TMakeRevisionDTO,
  makeRevisionSchema,
} from "@/domain/agent/application/validations/revision/make-revision-schema"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { HttpRequest, HttpResponse, IController } from "@/core/http/http"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { MakeRevisionUseCase } from "@/domain/agent/application/use-cases/revision/make-revision.useCase"

export class MakeRevisionController implements IController<TMakeRevisionDTO> {
  constructor(private useCase: MakeRevisionUseCase) {}

  async handle(request: HttpRequest<TMakeRevisionDTO>): Promise<HttpResponse> {
    try {
      const body = makeRevisionSchema.parse(request.body)

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
