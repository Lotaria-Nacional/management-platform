"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = void 0;
const zod_1 = require("zod");
const user_1 = require("../../enterprise/entities/user");
exports.registerUserSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(1, "O e-mail é obrigatório"),
    password: zod_1.z.string().min(8, "A palavra-passe é obrigatória e deve conter no mínimo 8 caractéres"),
    first_name: zod_1.z.string().min(1, "O nome é obrigatório"),
    last_name: zod_1.z.string().min(1, "O sobrenome é obrigatório"),
    role: zod_1.z.nativeEnum(user_1.UserRoleEnum),
});
//# sourceMappingURL=register-user.schema.js.map