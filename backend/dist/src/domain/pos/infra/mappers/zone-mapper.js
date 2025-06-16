"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneMapper = void 0;
const zone_entity_1 = require("../../enterprise/entities/zone.entity");
class ZoneMapper {
    static toDomain(data) {
        const { created_at, id, value, area_id } = data;
        return zone_entity_1.Zone.create({
            value,
            area_id: area_id ?? undefined,
            created_at,
        }, id);
    }
}
exports.ZoneMapper = ZoneMapper;
//# sourceMappingURL=zone-mapper.js.map