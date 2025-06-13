import { z } from "zod"
import { AgentTypeEnum } from "@/domain/agent/enterprise/enums/agent-type"

export const editAgentSchema = z.object({
  id: z.string().min(1, "O id é obrigatório"),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z
    .number({ message: "O número de telefone deve ser um número inteiro" })
    .int("Deve ser um número inteiro")
    .refine((val) => val.toString().length === 9, {
      message: "O número de telefone deve conter exatamente 9 dígitos",
    })
    .optional(),
  afrimoney: z
    .number({ message: "O número afrimoney deve ser um número inteiro" })
    .int("Deve ser um número inteiro")
    .refine((val) => val.toString().length === 9, {
      message: "O número afrimoney deve conter exatamente 9 dígitos",
  })
    .optional(),
  agent_type: z
    .enum([AgentTypeEnum.LOTARIA_NACIONAL, AgentTypeEnum.REVENDOR], {
      message: "Tipo de agente inválido",
    })
    .optional(),
  status: z.string().optional(),
  pos_id: z.string().optional(),
  terminal_id: z.string().optional(),
})

export type TEditAgentDTO = z.infer<typeof editAgentSchema>
