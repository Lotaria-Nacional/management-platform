"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editSupervisionSchema = void 0;
const zod_1 = require("zod");
exports.editSupervisionSchema = zod_1.z.object({
    id: zod_1.z.string(),
    agent_id: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
    additional_info: zod_1.z.string().nullable().optional(),
    items: zod_1.z.record(zod_1.z.string(), zod_1.z.boolean()).optional(),
});
//# sourceMappingURL=edit-supervision-schema.js.map