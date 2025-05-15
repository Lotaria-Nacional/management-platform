import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { IMakeRevisionRequestDTO } from "@/domain/agent/application/dto/revision/make-revision.dto";
import { MakeRevisionUseCase } from "@/domain/agent/application/use-cases/revision/make-revision.useCase";

export class MakeRevisionController implements IController<IMakeRevisionRequestDTO> {
    constructor(private useCase:MakeRevisionUseCase){}

    async handle(request: HttpRequest<IMakeRevisionRequestDTO>): Promise<HttpResponse> {

        try{

            if(!request.body){
                return {
                    statusCode:400,
                    body:{
                        message:"Please fill up all the required fields."
                    }

                }
            }
            
            const { additional_info, agent_id, image, items } = request.body

            await this.useCase.execute({
                additional_info,
                agent_id,
                image,
                items
            })

            return {
                statusCode:201,
                body:{
                    message:"Successfuly created."
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