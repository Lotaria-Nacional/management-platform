import { IController, HttpRequest, HttpResponse } from "@/core/http/http"
import { HttpStatusCode } from "@/core/http/http-status-code"
import { IdParamsSchema } from "@/core/validations/common/params.schema"
import { handleControllerError } from "@/shared/utils/handle-controller-error"
import { GetPosByIdUseCase } from "../../application/use-cases/get-pos-by-id.useCase"

export class GetPosByIdController implements IController<any> {
  constructor(private useCase: GetPosByIdUseCase) {}

  async handle(request: HttpRequest<any>): Promise<HttpResponse> {
    const { id } = IdParamsSchema.parse(request.params)

    try {
      const { pos } = await this.useCase.execute(id)

      return {
        statusCode: HttpStatusCode.OK,
        body: pos,
      }
    } catch (error) {
      return handleControllerError(error)
    }
  }
}
