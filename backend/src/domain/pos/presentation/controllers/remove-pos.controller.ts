import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { RemovePosUseCase } from "../../application/use-cases/remove-pos.useCase";

export class RemovePosController implements IController<any> {
    constructor(private useCase:RemovePosUseCase){}

    async handle(request: HttpRequest<any>): Promise<HttpResponse> {

        try {
            if(!request.params.id){
                return {
                    statusCode:400,
                    body:{ message:"Valid id is required" }
                }
            }

            await this.useCase.execute(request.params.id)

            return {
                statusCode:200,
                body: { 
                    message:"POS deleted successfully" 
                } 
            }

        } catch (error) {
            console.error("[DeletePOSController]", error)
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