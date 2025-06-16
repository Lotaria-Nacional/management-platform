"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaMapper = void 0;
const area_entity_1 = require("../../enterprise/entities/area.entity");
class AreaMapper {
    static toDomain(data) {
        const { zones, created_at, id, name } = data;
        return area_entity_1.Area.create({
            name,
            zones: zones?.map((city) => ({
                id: city.id,
                value: city.value,
            })),
            created_at,
        }, id);
    }
}
exports.AreaMapper = AreaMapper;
//# sourceMappingURL=area-mapper.js.map