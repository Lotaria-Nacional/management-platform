import { HttpRequest, HttpResponse, IController } from "@/core/presentation/http";
import { SubmitPosAvaliationUseCase } from "@/domain/pos/application/use-cases/pos-avaliation/submit-pos-avaliation.useCase";

export class SubmitPosAvaliationController implements IController {

    constructor(private useCase:SubmitPosAvaliationUseCase){}

    async handle(request: HttpRequest): Promise<HttpResponse> {

        const { items, additional_info, image } = request.body

        const response = await this.useCase.execute({
            items,
            additional_info,
            image
        })

        return {
            body:response,
            statusCode:201
        }

    }
}