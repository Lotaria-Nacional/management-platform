import { FetchPosUseCase } from "../../application/use-cases/fetch-pos.useCase";
import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";

export class FetchPosController implements IController {
    constructor(private fetchPosUseCase:FetchPosUseCase){}

    async handle(_request: HttpRequest): Promise<HttpResponse> {

        try {
            const { pos } = await this.fetchPosUseCase.execute()

            return {
                statusCode:200,
                body: pos 
            }

        } catch (error) {
            console.error("[FetchPosController]", error)
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