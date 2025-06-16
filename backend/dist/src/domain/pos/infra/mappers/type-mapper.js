"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeMapper = void 0;
const type_entity_1 = require("../../enterprise/entities/type.entity");
class TypeMapper {
    static toDomain(data) {
        const { created_at, id, name, subtypes } = data;
        return type_entity_1.Type.create({
            name,
            subtypes: subtypes?.map((subtype) => ({
                id: subtype.id,
                name: subtype.name,
                type_id: subtype.type_id
            })),
            created_at,
        }, id);
    }
}
exports.TypeMapper = TypeMapper;
//# sourceMappingURL=type-mapper.js.map