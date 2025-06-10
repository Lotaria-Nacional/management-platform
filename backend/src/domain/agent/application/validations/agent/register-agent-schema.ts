import { AgentTypes } from "@/domain/agent/enterprise/enums/agent-type"
import { z } from "zod"

export const registerAgentSchema = z.object({
  first_name: z.string().min(1, "O nome é obrigatório"),
  last_name: z.string().min(1, "O sobrenome é obrigatório"),
  phone: z.number()
  .int("Deve ser um número inteiro")
  .refine(
      (val) => val.toString().length === 9,
      "O número de telefone deve conter exatamente 9 dígitos"
  )
  .refine(
      (val) => val > 0,
      "O número de telefone é obrigatório"
  ),
  afrimoney: z.number()
    .int("Deve ser um número inteiro")
    .refine(
      (val) => val.toString().length === 9,
      "O número da afrimoney deve conter exatamente 9 dígitos"
  )
  .refine(
      (val) => val > 0,
      "O número da afrimoney é obrigatório"
  ),
  pos_id: z.string().min(6, "POS inválido,").optional(),
  type: z
    .enum([AgentTypes.LOTARIA_NACIONAL, AgentTypes.REVENDOR], {message: "Tipo de agente inválido"}),
  terminal_id: z.string().min(6, "Terminal inválido,").optional(),
})

export type TRegisterAgentDTO = z.infer<typeof registerAgentSchema>
