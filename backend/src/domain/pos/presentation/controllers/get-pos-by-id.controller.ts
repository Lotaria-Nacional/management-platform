import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { GetPosByIdUseCase } from "../../application/use-cases/get-pos-by-id.useCase";

export class GetPosByIdController implements IController<any> {
    constructor(private useCase:GetPosByIdUseCase){}

    async handle(request: HttpRequest<any>): Promise<HttpResponse> {
        
        if(!request.params?.id){
            return {
                statusCode:400,
                body:{ message:"Valid id is required" }
            }
        }

        try {
            const { pos } = await this.useCase.execute(request.params.id)

            return {
                statusCode:200,
                body: pos 
            }

        } catch (error) {
            console.error("[GetPOSByIdController]", error)
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