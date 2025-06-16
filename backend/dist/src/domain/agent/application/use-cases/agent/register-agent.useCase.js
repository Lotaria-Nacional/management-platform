"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAgentUseCase = void 0;
const agent_entity_1 = require("@/domain/agent/enterprise/entities/agent.entity");
const generate_next_sequence_1 = require("@/shared/utils/generate-next-sequence");
const agent_status_1 = require("@/domain/agent/enterprise/enums/agent-status");
const not_found_error_1 = require("@/core/errors/not-found-error");
class RegisterAgentUseCase {
    constructor(repository, posRepository, terminalRepository) {
        this.repository = repository;
        this.posRepository = posRepository;
        this.terminalRepository = terminalRepository;
    }
    async execute(data) {
        let id_reference;
        if (data.agent_type === "LOTARIA-NACIONAL") {
            id_reference = await (0, generate_next_sequence_1.generateNextSequence)("id_ln_agent_reference_seq");
        }
        else {
            id_reference = await (0, generate_next_sequence_1.generateNextSequence)("id_rev_agent_reference_seq");
        }
        let type_id = undefined;
        let city_id = undefined;
        let area_id = undefined;
        let zone_id = undefined;
        let province_id = undefined;
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
        const agent = agent_entity_1.Agent.create({
            ...data,
            pos_id: data.pos_id,
            id_reference: id_reference,
            status: data.status ?? agent_status_1.AgentStatusEnum.INACTIVE,
            terminal_id: data.terminal_id ?? undefined,
            type_id,
            province_id,
            city_id,
            area_id,
            zone_id,
        });
        await this.repository.create(agent);
        return {
            agent,
        };
    }
}
exports.RegisterAgentUseCase = RegisterAgentUseCase;
//# sourceMappingURL=register-agent.useCase.js.map