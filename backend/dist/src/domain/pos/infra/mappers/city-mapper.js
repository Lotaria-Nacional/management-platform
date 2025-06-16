"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityMapper = void 0;
const city_entity_1 = require("../../enterprise/entities/city.entity");
class CityMapper {
    static toDomain(data) {
        const { created_at, id, name, areas, province_id } = data;
        return city_entity_1.City.create({
            name,
            province_id,
            areas: areas.map((area) => ({
                id: area.id,
                name: area.name,
                city_id: area.city_id ?? undefined
            })),
            created_at,
        }, id);
    }
}
exports.CityMapper = CityMapper;
//# sourceMappingURL=city-mapper.js.map