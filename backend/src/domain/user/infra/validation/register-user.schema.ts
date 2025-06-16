import { z } from "zod";
import { UserRoleEnum } from "../../enterprise/entities/user";

export const registerUserSchema = z.object({
    email:z.string().email().min(1, "O e-mail é obrigatório"),
    password:z.string().min(8, "A palavra-passe é obrigatória e deve conter no mínimo 8 caractéres"),
    first_name:z.string().min(1, "O nome é obrigatório"),
    last_name:z.string().min(1, "O sobrenome é obrigatório"),
    role:z.nativeEnum(UserRoleEnum),
})

export type RegisterDTO = z.infer<typeof registerUserSchema>