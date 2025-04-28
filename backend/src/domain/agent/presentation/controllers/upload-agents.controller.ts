import { HttpRequest, HttpResponse } from "@/core/presentation/controller";
import { UploadAgentUseCase } from "../../application/use-cases/upload-agent.useCase";

export class UploadAgentsController {
    constructor(private uploadAgentUseCase:UploadAgentUseCase){}

    async handle(req:HttpRequest):Promise<HttpResponse>{
        
        const file = (req as any).file as {
            buffer:Buffer;
            originalname:string
        } | undefined

        if(!file){
            return {
                statusCode:400,
                body:{
                    message:"CSV file is required"
                }
            }
        }


    }
}