"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTerminalSchema = void 0;
const zod_1 = require("zod");
exports.addTerminalSchema = zod_1.z.object({
    serial: zod_1.z.string().min(1, "O número de série é obrigatório"),
    sim_card: zod_1.z.coerce
        .string()
        .min(9, "O número do sim deve conter 9 dígitos")
        .max(9, "O número do sim deve conter 9 dígitos")
        .transform(val => Number(val)),
    pin: zod_1.z.coerce
        .string()
        .min(4, "O pin deve conter 4 dígitos")
        .max(4, "O pin deve conter 4 dígitos")
        .transform(val => Number(val))
        .optional(),
    puk: zod_1.z
        .number()
        .int({ message: "O puk deve ser um número inteiro" })
        .optional(),
    agent_id: zod_1.z.string().optional(),
});
//# sourceMappingURL=add-terminal-schema.js.map