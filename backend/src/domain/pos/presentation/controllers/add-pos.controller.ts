import { IAddPosRequestDTO } from "../../application/dto/add-pos.dto";
import { AddPosUseCase } from "../../application/use-cases/add-pos.useCase";
import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";

export class AddPosController implements IController<IAddPosRequestDTO> {
    constructor(private useCase:AddPosUseCase){}

    async handle(request: HttpRequest<IAddPosRequestDTO>): Promise<HttpResponse> {

        try {
            if(!request.body){
                return {
                    statusCode:400,
                    body:{ message:"Valid request body is required" }
                }
            }

            await this.useCase.execute(request.body)

            return {
                statusCode:201,
                body: { 
                    message:"POS added successfully" 
                } 
            }

        } catch (error) {
            console.error("[AddPosController]", error)
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