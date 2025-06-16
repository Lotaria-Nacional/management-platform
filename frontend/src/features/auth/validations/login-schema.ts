import { z } from "zod";

export const loginSchema = z.object({
    email:z.string().email({message:"E-mail inválido"}).min(1, "O email é obrigatório"),
    password:z.string().min(1, "A palavra-passe é obrigatória")
})

export type LoginDTO = z.infer<typeof loginSchema>