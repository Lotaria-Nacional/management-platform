"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTerminalByIdUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class GetTerminalByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const terminal = await this.repository.getById(id);
        if (!terminal)
            throw new not_found_error_1.NotFoundError("Terminal não encontrado");
        return { terminal };
    }
}
exports.GetTerminalByIdUseCase = GetTerminalByIdUseCase;
//# sourceMappingURL=get-terminal-by-id.useCase.js.map