import {
  IController,
  HttpRequest,
  HttpResponse,
} from "@/core/presentation/http"
import { IAddLicenceDTO } from "@/domain/pos/application/dto/licence/add-licence.dto"
import { AddLicenceUseCase } from "@/domain/pos/application/use-cases/licence/add-licence.useCase"

export class AddLicenceController implements IController<IAddLicenceDTO> {
  constructor(private useCase: AddLicenceUseCase) {}

  async handle(request: HttpRequest<IAddLicenceDTO>): Promise<HttpResponse> {
    if(!request.body?.reference_id ){
      return {
        statusCode:400,
        body:{ message:"Preencha todos os campos necessários" }
      }
    }
    try {

      const data = await this.useCase.execute({
        status:request.body.status,
        pos_id: request.body.pos_id,
        reference_id: request.body.reference_id,
        administration_id:request.body?.administration_id,
      })

      return {
        statusCode: 200,
        body: data,
      }
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { message: "Internal Server Error", error },
      }
    }
  }
}
