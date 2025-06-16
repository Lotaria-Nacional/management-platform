"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = void 0;
const zod_1 = require("zod");
exports.loginUserSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(1, "O e-mail é obrigatório"),
    password: zod_1.z.string().min(8, "A palavra-passe é obrigatória e deve conter no mínimo 8 caractéres"),
});
//# sourceMappingURL=login-user.schema.js.map