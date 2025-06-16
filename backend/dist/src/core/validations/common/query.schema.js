"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsSchema = void 0;
const zod_1 = require("zod");
exports.QueryParamsSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().default(1), // padrão definido aqui
    limit: zod_1.z.coerce.number().default(10),
    area_id: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val)),
    zone_id: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val)),
    city_id: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val)),
    province_id: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val)),
    type_id: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val)),
    status: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val)),
});
//# sourceMappingURL=query.schema.js.map