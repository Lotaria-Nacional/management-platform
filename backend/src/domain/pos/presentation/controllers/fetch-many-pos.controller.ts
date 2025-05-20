import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { FetchManyPosUseCase } from "../../application/use-cases/fetch-many-pos.useCase";

export class FetchManyPosController implements IController<any> {
    constructor(private useCase:FetchManyPosUseCase){}

    async handle(_request: HttpRequest<any>): Promise<HttpResponse> {

        try {
            const { pos } = await this.useCase.execute()

            return {
                statusCode:200,
                body: pos 
            }

        } catch (error) {
            console.error("[FetchManyPosController]", error)
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