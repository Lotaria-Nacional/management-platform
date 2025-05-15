import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { FetchManyRevisionsUseCase } from "@/domain/agent/application/use-cases/revision/fetch-many-revision.useCase";

export class FetchManyRevisionsController implements IController<void> {
    constructor(private useCase:FetchManyRevisionsUseCase){}

    async handle(_request: HttpRequest<void>): Promise<HttpResponse> {

        try{
            const { revisions } = await this.useCase.execute()

            return {
                statusCode:200,
                body:revisions
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