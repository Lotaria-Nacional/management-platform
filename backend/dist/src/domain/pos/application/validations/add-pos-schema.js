"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPosSchema = void 0;
const zod_1 = require("zod");
exports.addPosSchema = zod_1.z.object({
    latitude: zod_1.z.number()
        .min(-90, "A latitude mínima é -90")
        .max(90, "A latitude máxima é 90"),
    longitude: zod_1.z.number()
        .min(-180, "A longitude mínima é -180")
        .max(180, "A longitude máxima é 180"),
    province_id: zod_1.z.string()
        .min(1, "A província é obrigatória")
        .nonempty(),
    city_id: zod_1.z.string()
        .min(1, "A cidade é obrigatória")
        .nonempty(),
    area_id: zod_1.z.string()
        .min(1, "A área é obrigatória")
        .nonempty(),
    zone_id: zod_1.z.string()
        .min(1, "A zona é obrigatória")
        .nonempty(),
    type_id: zod_1.z.string()
        .min(1, "O tipo de POS é obrigatório")
        .nonempty(),
    subtype_id: zod_1.z.string().optional(),
    licence_id: zod_1.z.string().optional(),
    agent_id: zod_1.z.string().optional(),
    administration_id: zod_1.z.string().optional(),
});
//# sourceMappingURL=add-pos-schema.js.map