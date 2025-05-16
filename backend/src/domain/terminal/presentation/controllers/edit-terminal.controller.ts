import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { EditTerminalUseCase } from "../../application/use-cases/edit-terminal.useCase";
import { IEditTerminalRequestDto } from "../../application/dto/edit-terminal.dto";

export class EditTerminalController implements IController<IEditTerminalRequestDto>{
    constructor(private useCase:EditTerminalUseCase){}

    async handle(request: HttpRequest<IEditTerminalRequestDto>): Promise<HttpResponse> {
        try {
            const { id } = request.params

            const result = await this.useCase.execute({...request.body, id})

            return {
                statusCode:200,
                body:{
                message:"Updated Successfully",
                result   
                }
            }
        } catch (error) {
            return {
                body:{
                    message:"Internal Server Error",
                    error:error instanceof Error ? error.message : error
                },
                statusCode:500
            }
        }
    }
    
}