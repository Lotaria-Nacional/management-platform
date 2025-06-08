import { z } from "zod"

export const registerAgentSchema = z.object({
  first_name: z.string().min(2, "O nome é obrigatório"),
  last_name: z.string().min(2, "O sobrenome é obrigatório"),
  phone: z.string(),
  afrimoney: z.string().optional().nullable(),
  status: z.string().default("ACTIVE"),
  terminal_id: z.string().min(6, "Terminal inválido,").optional(),
  pos_id: z.string().min(6, "POS inválido,").optional(),
})

export type TRegisterAgentDTO = z.infer<typeof registerAgentSchema>
