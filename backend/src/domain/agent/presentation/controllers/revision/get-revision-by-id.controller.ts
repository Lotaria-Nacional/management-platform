import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { GetRevisionByIdUseCase } from "@/domain/agent/application/use-cases/revision/get-revision-by-id.useCase";

export class GetRevisionByIdController implements IController<any> {
        constructor(private useCase:GetRevisionByIdUseCase){}
    

    async handle(request: HttpRequest<any>): Promise<HttpResponse> {
        try {

            const  id  = request.params.id

            const { revision } = await this.useCase.execute({id: id as string})
            
            return {
                statusCode:200,
                body:revision
            }

        } catch (error:any) {
            return {
                statusCode:500,
                body:{
                    message:"Internal server error",
                    error:error.message
                }
            }
        }
    }
}