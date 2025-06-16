"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditAgentUseCase = void 0;
const not_found_error_1 = require("@/core/errors/not-found-error");
class EditAgentUseCase {
    constructor(agentRepository, posRepository, terminalRepository) {
        this.agentRepository = agentRepository;
        this.posRepository = posRepository;
        this.terminalRepository = terminalRepository;
    }
    async execute({ id, ...data }) {
        const agent = await this.agentRepository.getById(id);
        if (!agent) {
            throw new not_found_error_1.NotFoundError("Agente não encontrado");
        }
        // Derivar dados do POS
        let type_id = agent.props.type_id;
        let city_id = agent.props.city_id;
        let area_id = agent.props.area_id;
        let zone_id = agent.props.zone_id;
        let province_id = agent.props.province_id;
        if (data.pos_id) {
            const pos = await this.posRepository.getById(data.pos_id);
            if (pos) {
                type_id = pos.props.type?.id;
                province_id = pos.props.province?.id;
                city_id = pos.props.city?.id;
                area_id = pos.props.area?.id;
                zone_id = pos.props.zone?.id;
            }
        }
        if (data.terminal_id) {
            const terminal = await this.terminalRepository.getById(data.terminal_id);
            if (!terminal) {
                throw new not_found_error_1.NotFoundError("Terminal não encontrado");
            }
            terminal.update({ province_id, city_id, area_id, zone_id });
            await this.terminalRepository.save(terminal);
        }
        agent.update({
            ...data,
            type_id,
            province_id,
            city_id,
            area_id,
            zone_id,
        });
        await this.agentRepository.save(agent);
    }
}
exports.EditAgentUseCase = EditAgentUseCase;
//# sourceMappingURL=edit-agent.useCase.js.map