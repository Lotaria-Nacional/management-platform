import { IHashService } from "@/core/interfaces/hash-service"
import { LoginUserUseCase } from "@/domain/user/application/use-cases/auth/login-user"
import { RegisterUserUseCase } from "@/domain/user/application/use-cases/auth/register-user"
import { IUserRepository } from "@/domain/user/application/interfaces/user-repository.interface"
import { LoginUserController } from "@/domain/user/presentation/controllers/login-user.controller"
import { RegisterUserController } from "@/domain/user/presentation/controllers/register-user.controller"

export function makeUserControllers(repository: IUserRepository, hashService:IHashService) {
  const loginUserController = new LoginUserController(new LoginUserUseCase(repository, hashService))

  const registerUserController = new RegisterUserController(new RegisterUserUseCase(repository, hashService))
    
  return {
    loginUserController,
    registerUserController
  }
}
