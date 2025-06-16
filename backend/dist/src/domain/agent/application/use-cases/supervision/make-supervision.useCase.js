"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeSupervisionUseCase = void 0;
const supervision_entity_1 = require("@/domain/agent/enterprise/entities/supervision.entity");
class MakeSupervisionUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const { additional_info, agent_id, image, items } = data;
        const supervision = supervision_entity_1.Supervision.create({
            agent_id,
            additional_info,
            items,
            image,
        });
        await this.repository.create(supervision);
    }
}
exports.MakeSupervisionUseCase = MakeSupervisionUseCase;
//# sourceMappingURL=make-supervision.useCase.js.map