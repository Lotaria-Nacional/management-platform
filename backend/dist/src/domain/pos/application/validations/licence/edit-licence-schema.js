"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editLicenceSchema = void 0;
const licence_enums_1 = require("@/domain/pos/enterprise/enums/licence.enums");
const zod_1 = require("zod");
exports.editLicenceSchema = zod_1.z.object({
    id: zod_1.z.string(),
    administration_id: zod_1.z
        .string()
        .min(5, "id da administração muito curto")
        .optional(),
    pos_id: zod_1.z.string().min(5, "id do pos muito curto").optional(),
    status: zod_1.z.enum([licence_enums_1.LicenceStatusEnum.NOT_USED, licence_enums_1.LicenceStatusEnum.USED]).optional(),
    licence_reference: zod_1.z.string().min(1, "referência da licença é obrigatória").optional(),
});
//# sourceMappingURL=edit-licence-schema.js.map