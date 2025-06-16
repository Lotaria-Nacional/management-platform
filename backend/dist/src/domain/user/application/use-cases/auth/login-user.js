"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class LoginUserUseCase {
    constructor(userRepository, hashService) {
        this.userRepository = userRepository;
        this.hashService = hashService;
    }
    async execute({ email, password }) {
        const user = await this.userRepository.getByEmail(email);
        if (!user) {
            throw new not_found_error_1.NotFoundError("User não encontrado");
        }
        const isPasswordValid = await this.comparePasswords(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        return user.toJSON();
    }
    async comparePasswords(provided, stored) {
        return this.hashService.compare(provided, stored);
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
//# sourceMappingURL=login-user.js.map