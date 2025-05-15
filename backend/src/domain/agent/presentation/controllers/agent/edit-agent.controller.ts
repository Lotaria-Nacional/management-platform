import { IEditAgentRequestDTO } from "@/domain/agent/application/dto/agent/edit-agent.dto";
import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { EditAgentUseCase } from "@/domain/agent/application/use-cases/agent/edit-agent.useCase";


export class EditAgentController implements IController<IEditAgentRequestDTO> {
    constructor(private useCase:EditAgentUseCase){}

    async handle(request: HttpRequest<IEditAgentRequestDTO>): Promise<HttpResponse> {

        try {

            const { id } = request.params
            const requestBody = request.body

            const agent = await this.useCase.execute({...requestBody, id})
    
            return {
                body:{
                    message:"Updated Successfuly",
                    agent
                },
                statusCode:200
                
            }
            
        } catch (error) {
            return {
                body:{
                    message:"Internal Server Error",
                    error: error instanceof Error && error.message 
                },
                statusCode:500
            }
            
        }

    }

}