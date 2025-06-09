import { z } from "zod"
export const editAgentSchema = z.object({
  first_name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome muito longo")
    .optional(),

  last_name: z
    .string()
    .min(2, "o sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "Sobrenome muito longo")
    .optional(),

  phone: z
    .string()
    .regex(/^\d{9}$/, "O telefone deve ter 9 dígitos numéricos")
    .optional(),

  afrimoney: z
    .string()
    .regex(/^\d{9}$/, "Afrimoney deve ter 9 dígitos numéricos")
    .optional(),

  pos_id: z.string().min(1, "POS é obrigatório").optional(),

  terminal_id: z.string().min(1, "Terminal é obrigatório").optional(),
})

export type EditAgentDTO = z.infer<typeof editAgentSchema>
