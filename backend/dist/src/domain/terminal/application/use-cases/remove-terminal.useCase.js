"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTerminalUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class RemoveTerminalUseCase {
    constructor(terminalRepository) {
        this.terminalRepository = terminalRepository;
    }
    async execute(id) {
        const terminal = await this.terminalRepository.getById(id);
        if (!terminal)
            throw new not_found_error_1.NotFoundError("Terminal não encontrado");
        await this.terminalRepository.delete(id);
    }
}
exports.RemoveTerminalUseCase = RemoveTerminalUseCase;
//# sourceMappingURL=remove-terminal.useCase.js.map