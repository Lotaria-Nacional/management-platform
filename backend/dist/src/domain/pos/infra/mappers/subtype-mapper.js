"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtypeMapper = void 0;
const subtype_entity_1 = require("../../enterprise/entities/subtype.entity");
class SubtypeMapper {
    static toDomain(data) {
        const { created_at, id, name, type_id } = data;
        return subtype_entity_1.Subtype.create({
            name,
            type_id,
            created_at,
        }, id);
    }
}
exports.SubtypeMapper = SubtypeMapper;
//# sourceMappingURL=subtype-mapper.js.map