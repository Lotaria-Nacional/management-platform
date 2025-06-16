"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentMapper = void 0;
const agent_entity_1 = require("../../enterprise/entities/agent.entity");
class AgentMapper {
    static toDomain(data) {
        const { afrimoney, first_name, id, id_reference, last_name, phone, status, terminal, agent_type, pos, bi_number, genre, area_id, city_id, province_id, type_id, zone_id, } = data;
        return agent_entity_1.Agent.create({
            afrimoney,
            first_name,
            id_reference,
            last_name,
            phone,
            area_id: area_id ?? undefined,
            city_id: city_id ?? undefined,
            province_id: province_id ?? undefined,
            type_id: type_id ?? undefined,
            zone_id: zone_id ?? undefined,
            genre: genre ?? undefined,
            status: status,
            bi_number: bi_number ?? undefined,
            agent_type: agent_type,
            area: pos?.area ? { id: pos.area.id, name: pos?.area.name } : undefined,
            zone: pos?.zone
                ? { id: pos?.zone.id, value: pos?.zone.value }
                : undefined,
            type: pos?.type ? { id: pos?.type.id, name: pos.type.name } : undefined,
            city: pos?.city.id
                ? { id: pos?.city.id, name: pos?.city.name }
                : undefined,
            province: pos?.province.id
                ? { id: pos.province.id, name: pos?.province.name }
                : undefined,
            terminal: terminal
                ? {
                    id: terminal.id,
                    serial: terminal.serial,
                    sim_card: terminal.sim_card,
                    id_reference: terminal.id_reference,
                }
                : undefined,
            pos: pos
                ? {
                    id: pos.id,
                    id_reference: pos.id_reference,
                    latitude: pos.latitude,
                    longitude: pos.longitude,
                    province: { id: pos.province.id, name: pos.province.name },
                }
                : undefined,
        }, id);
    }
    static toPersistence(agent) {
        const data = agent.toJSON();
        return {
            id_reference: data.id_reference,
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone ?? null,
            afrimoney: data.afrimoney ?? null,
            status: data.status,
            agent_type: data.agent_type,
            genre: data.genre ?? null,
            bi_number: data.bi_number ?? null,
            pos: data.pos_id ? { connect: { id: data.pos_id } } : undefined,
            type: data.type_id ? { connect: { id: data.type_id } } : undefined,
            province: data.province_id
                ? { connect: { id: data.province_id } }
                : undefined,
            city: data.city_id ? { connect: { id: data.city_id } } : undefined,
            area: data.area_id ? { connect: { id: data.area_id } } : undefined,
            zone: data.zone_id ? { connect: { id: data.zone_id } } : undefined,
            terminal: data.terminal_id
                ? { connect: { id: data.terminal_id } }
                : undefined,
        };
    }
}
exports.AgentMapper = AgentMapper;
//# sourceMappingURL=agent-mapper.js.map