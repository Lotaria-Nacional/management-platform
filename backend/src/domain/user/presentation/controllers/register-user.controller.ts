import { HttpStatusCode } from "@/core/http/http-status-code";
import { HttpRequest, HttpResponse, IController } from "@/core/http/http";
import { handleControllerError } from "@/shared/utils/handle-controller-error";
import { RegisterUserUseCase } from "../../application/use-cases/auth/register-user.useCase";
import { RegisterDTO, registerUserSchema } from "../../infra/validation/register-user.schema";

export class RegisterUserController implements IController {
  constructor(private useCase: RegisterUserUseCase) {}

  async handle(request: HttpRequest<RegisterDTO>): Promise<HttpResponse> {
    try {
      const body = registerUserSchema.parse(request.body);
      const user = await this.useCase.execute(body);

      return {
        statusCode: HttpStatusCode.CREATED,
        body: {
          message: "Usuário registrado com sucesso",
          data: {
            id: user.id,
            email: user.email,
            last_name: user.last_name,
            first_name: user.first_name,
            role:user.role
          },
        },
      };
    } catch (error) {
      return handleControllerError(error);
    }
  }
}
