"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditTerminalUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class EditTerminalUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ id, ...updates }) {
        const terminal = await this.repository.getById(id);
        if (!terminal)
            throw new not_found_error_1.NotFoundError("Terminal não encontrado");
        terminal.update(updates);
        await this.repository.save(terminal);
    }
}
exports.EditTerminalUseCase = EditTerminalUseCase;
//# sourceMappingURL=edit-terminal.useCase.js.map