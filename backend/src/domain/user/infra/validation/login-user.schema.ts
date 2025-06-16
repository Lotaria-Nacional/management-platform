import { z } from "zod";

export const loginUserSchema = z.object({
    email:z.string().email().min(1, "O e-mail é obrigatório"),
    password:z.string().min(8, "A palavra-passe é obrigatória e deve conter no mínimo 8 caractéres"),
})

export type LoginDTO = z.infer<typeof loginUserSchema>