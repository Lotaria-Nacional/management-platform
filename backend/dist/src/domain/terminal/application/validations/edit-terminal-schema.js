"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTerminalSchema = void 0;
const zod_1 = require("zod");
exports.editTerminalSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, "O id do terminal é obrigatório"),
    serial: zod_1.z.string().min(1, "O número de série é obrigatório").optional(),
    sim_card: zod_1.z
        .coerce
        .string()
        .min(9, "O número do sim deve conter 9 dígitos")
        .max(9, "O número do sim deve conter 9 dígitos")
        .transform(val => Number(val))
        .optional(),
    pin: zod_1.z
        .number()
        .int({ message: "O pin deve ser um número inteiro" })
        .optional(),
    puk: zod_1.z
        .number()
        .int({ message: "O puk deve ser um número inteiro" })
        .optional(),
    agent_id: zod_1.z.string().optional(),
});
//# sourceMappingURL=edit-terminal-schema.js.map