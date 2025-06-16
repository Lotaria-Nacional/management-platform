"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenceMapper = void 0;
const licence_entity_1 = require("../../enterprise/entities/licence.entity");
class LicenceMapper {
    static toDomain(licence) {
        return licence_entity_1.Licence.create({
            administration_id: licence.administration_id,
            licence_reference: licence.licence_reference,
            status: licence.status,
            ...(licence.administration_id && { admin: { id: licence.administration.id, name: licence.administration.name } }),
            created_at: licence.created_at
        }, licence.id);
    }
    static toPrisma(licence) {
        const data = licence.toJSON();
        return {
            administration: { connect: { id: data.administration_id } },
            status: licence.status,
            licence_reference: data.licence_reference,
            ...(data.pos_id && { pos: { connect: { id: data.pos_id } } }),
            ...(data.administration_id && { administration: { connect: { id: data.administration_id } } }),
        };
    }
}
exports.LicenceMapper = LicenceMapper;
//# sourceMappingURL=licence-mapper.js.map