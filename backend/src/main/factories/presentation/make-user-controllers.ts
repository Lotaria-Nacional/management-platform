import { IHashService } from "@/core/interfaces/hash-service"
import { LoginUserUseCase } from "@/domain/user/application/use-cases/auth/login-user.useCase"
import { RegisterUserUseCase } from "@/domain/user/application/use-cases/auth/register-user.useCase"
import { IUserRepository } from "@/domain/user/application/interfaces/user-repository.interface"
import { LoginUserController } from "@/domain/user/presentation/controllers/login-user.controller"
import { RegisterUserController } from "@/domain/user/presentation/controllers/register-user.controller"
import { IAuditLogService } from "@/domain/audit-log/enterprise/services/audit-log-service.interface"

export function makeUserControllers(repository: IUserRepository, hashService:IHashService, auditLogService:IAuditLogService) {
  const loginUserController = new LoginUserController(new LoginUserUseCase(repository, hashService))

  const registerUserController = new RegisterUserController(new RegisterUserUseCase(repository, hashService, auditLogService))
    
  return {
    loginUserController,
    registerUserController
  }
}
