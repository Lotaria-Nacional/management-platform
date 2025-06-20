import { ConflictError } from "@/core/errors/conflict-error";
import { IHashService } from "@/core/interfaces/hash-service";
import { User } from "@/domain/user/enterprise/entities/user";
import { IUserRepository } from "../../interfaces/user-repository.interface";
import { RegisterDTO } from "@/domain/user/infra/validation/register-user.schema";
import { IAuditLogService } from "@/domain/audit-log/enterprise/services/audit-log-service.interface";
import { AUDIT_LOG_ACTIONS_ENUM } from "@/domain/audit-log/enterprise/enums/audit-log-actions";

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hashService: IHashService,
    private auditLogService: IAuditLogService
  ) {}

  async execute({ first_name, last_name, role, email, password }: RegisterDTO): Promise<User> {
    const existingUser = await this.userRepository.getByEmail(email);

    if (existingUser) {
      throw new ConflictError("E-mail já está em uso");
    }

    const hashedPassword = await this.hashService.hash(password);

    const user = new User({
      first_name,
      last_name,
      role,
      email,
      password: hashedPassword,
    });

    const newUser= await this.userRepository.create(user);

    await this.auditLogService.log({
      user_id:"6850100325c28df748b82d56",
      action:AUDIT_LOG_ACTIONS_ENUM.ADD,
      entity:"Usuário",
      entity_id:newUser.id,
      metadata:{  },
      timestamp:new Date()
    })


    return user;
  }
}
