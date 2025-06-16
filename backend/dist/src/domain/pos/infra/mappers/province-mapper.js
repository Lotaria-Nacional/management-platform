"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinceMapper = void 0;
const province_entity_1 = require("../../enterprise/entities/province.entity");
class ProvinceMapper {
    static toDomain(data) {
        const { cities, created_at, id, name } = data;
        return province_entity_1.Province.create({
            name,
            cities: cities.map((city) => ({
                id: city.id,
                name: city.name,
            })),
            created_at,
        }, id);
    }
}
exports.ProvinceMapper = ProvinceMapper;
//# sourceMappingURL=province-mapper.js.map