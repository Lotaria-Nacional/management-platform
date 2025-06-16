import { ConflictError } from "@/core/errors/conflict-error";
import { IHashService } from "@/core/interfaces/hash-service";
import { User } from "@/domain/user/enterprise/entities/user";
import { IUserRepository } from "../../interfaces/user-repository.interface";
import { RegisterDTO } from "@/domain/user/infra/validation/register-user.schema";

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hashService: IHashService
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

    await this.userRepository.create(user);

    return user;
  }
}
