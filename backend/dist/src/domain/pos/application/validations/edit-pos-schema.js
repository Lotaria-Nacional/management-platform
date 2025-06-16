"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPosSchema = void 0;
const zod_1 = require("zod");
exports.editPosSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "o id do pos é obrigatório"),
    latitude: zod_1.z
        .number()
        .min(-90, "A latitude mínima é -90")
        .max(90, "A latitude máxima é 90")
        .optional(),
    longitude: zod_1.z
        .number()
        .min(-180, "A longitude mínima é -180")
        .max(180, "A longitude máxima é 180")
        .optional(),
    province_id: zod_1.z.string().optional(),
    city_id: zod_1.z.string().optional(),
    area_id: zod_1.z.string().optional(),
    zone_id: zod_1.z.string().optional(),
    type_id: zod_1.z.string().optional(),
    subtype_id: zod_1.z.string().optional(),
    agent_id: zod_1.z.string().optional(),
    licence_id: zod_1.z.string().optional(),
    administration_id: zod_1.z.string().optional(),
});
//# sourceMappingURL=edit-pos-schema.js.map