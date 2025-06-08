import { z } from "zod"

export const editAgentSchema = z.object({
  id: z.string(),
  agent_id: z.string().min(5, "O id do agente muito curto").optional(),
  first_name: z.string().min(2, "O nome é muito curto").optional(),
  last_name: z.string().min(2, "O sobrenome é muito curto").optional(),
  phone: z.string().optional(),
  afrimoney: z.string().nullable().optional(),
  status: z.string().default("ACTIVE").optional(),
  terminal_id: z.string().min(6, "Terminal inválido,").optional(),
  pos_id: z.string().min(6, "POS inválido,").optional().nullable(),
})

export type TEditAgentDTO = z.infer<typeof editAgentSchema>
