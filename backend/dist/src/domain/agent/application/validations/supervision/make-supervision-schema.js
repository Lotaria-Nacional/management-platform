"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSupervisionSchema = void 0;
const zod_1 = require("zod");
exports.makeSupervisionSchema = zod_1.z.object({
    agent_id: zod_1.z.string(),
    image: zod_1.z.string(),
    additional_info: zod_1.z.string().nullable(),
    items: zod_1.z.record(zod_1.z.string(), zod_1.z.boolean()),
});
//# sourceMappingURL=make-supervision-schema.js.map