"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgentByIdUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class GetAgentByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        const agent = await this.repository.getById(id);
        if (!agent) {
            throw new not_found_error_1.NotFoundError();
        }
        return {
            agent
        };
    }
}
exports.GetAgentByIdUseCase = GetAgentByIdUseCase;
//# sourceMappingURL=get-agent-by-id.useCase.js.map