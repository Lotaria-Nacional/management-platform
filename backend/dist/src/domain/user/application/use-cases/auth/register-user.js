"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserUseCase = void 0;
const conflict_error_1 = require("@/core/errors/conflict-error");
const user_1 = require("@/domain/user/enterprise/entities/user");
class RegisterUserUseCase {
    constructor(userRepository, hashService) {
        this.userRepository = userRepository;
        this.hashService = hashService;
    }
    async execute({ first_name, last_name, role, email, password }) {
        const existingUser = await this.userRepository.getByEmail(email);
        if (existingUser) {
            throw new conflict_error_1.ConflictError("E-mail já está em uso");
        }
        const hashedPassword = await this.hashService.hash(password);
        const user = new user_1.User({
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
exports.RegisterUserUseCase = RegisterUserUseCase;
//# sourceMappingURL=register-user.js.map