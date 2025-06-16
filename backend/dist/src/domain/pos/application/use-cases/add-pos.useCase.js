"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPosUseCase = void 0;
const pos_entity_1 = require("@/domain/pos/enterprise/entities/pos.entity");
const generate_next_sequence_1 = require("@/shared/utils/generate-next-sequence");
class AddPosUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const { agent_id, latitude, longitude, area_id, city_id, type_id, zone_id, subtype_id, licence_id, province_id, administration_id, } = data;
        const id_reference = await (0, generate_next_sequence_1.generateNextSequence)("id_pos_reference_seq");
        const pos = pos_entity_1.Pos.create({
            area_id,
            city_id,
            province_id,
            latitude,
            longitude,
            type_id,
            zone_id,
            id_reference,
            status: false,
            agent_id: agent_id ? agent_id : undefined,
            subtype_id: subtype_id ? subtype_id : undefined,
            licence_id: licence_id ? licence_id : undefined,
            administration_id: administration_id ? administration_id : undefined,
        });
        pos.checkPosStatus();
        await this.repository.create(pos);
    }
}
exports.AddPosUseCase = AddPosUseCase;
//# sourceMappingURL=add-pos.useCase.js.map