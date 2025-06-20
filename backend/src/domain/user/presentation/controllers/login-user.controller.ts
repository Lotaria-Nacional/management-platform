import { HttpStatusCode } from "@/core/http/http-status-code";
import { HttpRequest, HttpResponse, IController } from "@/core/http/http";
import { handleControllerError } from "@/shared/utils/handle-controller-error";
import { LoginUserUseCase } from "../../application/use-cases/auth/login-user.useCase";
import { LoginDTO, loginUserSchema } from "../../infra/validation/login-user.schema";

export class LoginUserController implements IController {
    constructor(private uesCase:LoginUserUseCase){}

    async handle(request: HttpRequest<LoginDTO>): Promise<HttpResponse> {
        try {
            const body = loginUserSchema.parse(request.body)
            const user = await this.uesCase.execute(body)
            return {
                statusCode:HttpStatusCode.OK,
                body:{
                    message:"Login bem sucedido",
                    user
                }
            }

        } catch (error) {
            return handleControllerError(error)
        }
    }
}