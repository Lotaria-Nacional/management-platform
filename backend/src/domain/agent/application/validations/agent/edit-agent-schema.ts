import { AgentTypes } from "@/domain/agent/enterprise/enums/agent-type"
import { z } from "zod"

export const editAgentSchema = z.object({
  id: z.string().min(1, "O id é obrigatório"),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z
    .number()
    .int()
    .optional(),
  afrimoney: z
    .number()
    .int()
    .optional(),
  type: z
    .enum([AgentTypes.LOTARIA_NACIONAL, AgentTypes.REVENDOR], {
      message: "Tipo de agente inválido",
    })
    .optional(),
  status: z.string().default("ACTIVE").optional(),
  pos_id: z.string().optional(),
  terminal_id: z.string().optional(),
})

export type TEditAgentDTO = z.infer<typeof editAgentSchema>
