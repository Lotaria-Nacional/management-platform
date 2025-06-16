"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdParamsSchema = void 0;
const zod_1 = require("zod");
exports.IdParamsSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "ID é obrigatório"),
});
//# sourceMappingURL=params.schema.js.map