import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { RemoveRevisionUseCase } from "@/domain/agent/application/use-cases/revision/remove-revision.useCase";

export class RemoveRevisionController implements IController<any> {
    constructor(private useCase:RemoveRevisionUseCase){}

    async handle(request: HttpRequest<any>): Promise<HttpResponse> {

        try{
            const id  = request.params.id

            await this.useCase.execute({ id:id as string })

            return {
                statusCode:200,
                body: {
                    message:"Deleted successfuly"
                }
            }

       } catch(error:any){
            return {
                statusCode:500,
                body:{
                    message:"Erro interno no servidor."
                }
            }
       }

    }
}