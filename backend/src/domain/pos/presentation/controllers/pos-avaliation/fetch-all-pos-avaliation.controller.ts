import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { FetchAllPosAvaliationUseCase } from "@/domain/pos/application/use-cases/pos-avaliation/fetch-all-pos-avaliation.useCase";

export class FetchAllPosAvaliationController implements IController {

    constructor(private useCase:FetchAllPosAvaliationUseCase){}

    async handle(_request: HttpRequest): Promise<HttpResponse> {

        const response = await this.useCase.execute()

        return {
            body:response,
            statusCode:200
        }

    }
}