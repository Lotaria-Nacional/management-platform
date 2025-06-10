import { AgentTypes } from "@/domain/agent/enterprise/enums/agent-type"
import { z } from "zod"

export const editAgentSchema = z.object({
  id: z.string().min(1, "O id é obrigatório"),
  first_name: z.string().min(1, "O nome é obrigatório").optional(),
  last_name: z.string().min(1, "O sobrenome é obrigatório").optional(),
  phone: z
    .number()
    .int()
    .min(1, "O número de telefone é obrigatório")
    .max(9, "O número de telefone deve conter 9 dígitos")
    .optional(),
  afrimoney: z
    .number()
    .int()
    .min(1, "O número da afrimoney é obrigatório")
    .max(9, "O número da afrimoney deve conter 9 dígitos")
    .optional(),
  type: z
    .enum([AgentTypes.LOTARIA_NACIONAL, AgentTypes.REVENDOR], {
      message: "Tipo de agente inválido",
    })
    .optional(),
  status: z.string().default("ACTIVE").optional(),
  pos_id: z.string().min(6, "POS inválido,").optional(),
  terminal_id: z.string().min(6, "Terminal inválido,").optional(),
})

export type TEditAgentDTO = z.infer<typeof editAgentSchema>
