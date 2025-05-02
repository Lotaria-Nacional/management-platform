import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { UploadPosUseCase } from "@/domain/pos/application/use-cases/pos/upload-pos.useCase";

export class UploadPosController implements IController {
    constructor(private uploadPosUseCase:UploadPosUseCase){}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const file = (request as any).file
        
        if(!file?.buffer){
            return {
                statusCode:400,
                body:{ message:"Valid file buffer is required" }
            }
        }

        try {
            const result = await this.uploadPosUseCase.execute({ buffer:file })
            return {
                statusCode:201,
                body: result 
            }

        } catch (error) {
            console.error("[UploadPosController]", error)
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