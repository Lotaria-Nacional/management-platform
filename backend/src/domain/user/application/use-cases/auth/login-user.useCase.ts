import { IHashService } from "@/core/interfaces/hash-service";
import { NotFoundError } from "@/core/errors/not-found-error";
import { User, UserProps } from "@/domain/user/enterprise/entities/user";
import { LoginDTO } from "@/domain/user/infra/validation/login-user.schema";
import { IUserRepository } from "../../interfaces/user-repository.interface";

export class LoginUserUseCase {
  constructor(private readonly userRepository: IUserRepository, private hashService: IHashService) {}

  async execute({ email, password }: LoginDTO): Promise<UserProps> {
    const user = await this.userRepository.getByEmail(email);

    if (!user) {
      throw new NotFoundError("User não encontrado");
    }

    const isPasswordValid = await this.comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    return user.toJSON()
  }

  private async comparePasswords(provided: string, stored: string): Promise<boolean> {
    return this.hashService.compare(provided, stored);
  }
}
