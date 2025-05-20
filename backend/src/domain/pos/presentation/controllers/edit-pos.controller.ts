import { IEditPosRequestDTO } from "../../application/dto/edit-pos.dto";
import { EditPosUseCase } from "../../application/use-cases/edit-pos.useCase";
import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";

export class EditPosController implements IController<IEditPosRequestDTO> {
    constructor(private useCase:EditPosUseCase){}

    async handle(request: HttpRequest<IEditPosRequestDTO>): Promise<HttpResponse> {

        try {
            if(!request.params.id){
                return {
                    statusCode:400,
                    body:{ message:"Valid id is required" }
                }
            }

            await this.useCase.execute({
                ...request.body,
                id:request.params.id,
            })

            return {
                statusCode:200,
                body: { 
                    message:"POS updated successfully" 
                } 
            }

        } catch (error) {
            console.error("[EditController]", error)
            return {
                statusCode:500,
                body:{
                    message:"Internal server error",
                    error:error
                }
            }
        }
    }
}