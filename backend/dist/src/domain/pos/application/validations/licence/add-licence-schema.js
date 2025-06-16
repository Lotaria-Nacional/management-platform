"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLicenceSchema = void 0;
const zod_1 = require("zod");
exports.addLicenceSchema = zod_1.z.object({
    administration_id: zod_1.z.string().min(1, "id da administração muito curto"),
    licence_reference: zod_1.z.string().min(1, "referência da licença é obrigatória"),
    pos_id: zod_1.z.string().optional(),
});
//# sourceMappingURL=add-licence-schema.js.map