"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTerminalUseCase = void 0;
const terminal_entity_1 = require("@/domain/terminal/enterprise/entities/terminal.entity");
const generate_next_sequence_1 = require("@/shared/utils/generate-next-sequence");
class AddTerminalUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute({ serial, pin, puk, sim_card, agent_id, }) {
        const id_reference = await (0, generate_next_sequence_1.generateNextSequence)("id_terminal_reference_seq");
        const terminal = terminal_entity_1.Terminal.create({
            serial,
            sim_card,
            agent_id,
            pin: pin ?? undefined,
            puk: puk ?? undefined,
            id_reference,
        });
        await this.repository.create(terminal);
    }
}
exports.AddTerminalUseCase = AddTerminalUseCase;
//# sourceMappingURL=add-terminal.useCase.js.map