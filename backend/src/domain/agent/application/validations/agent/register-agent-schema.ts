import { z } from "zod"
import { AgentTypeEnum } from "@/domain/agent/enterprise/enums/agent-type"
import { AgentStatusEnum } from "@/domain/agent/enterprise/enums/agent-status"
import { AgentGenreEnum } from "@/domain/agent/enterprise/enums/agent-genre"

export const registerAgentSchema = z.object({
  first_name: z.string().min(1, "O nome é obrigatório"),
  last_name: z.string().min(1, "O sobrenome é obrigatório"),
  phone: z
    .number({ message: "O número de telefone deve ser um número inteiro" })
    .int("Deve ser um número inteiro")
    .refine((val) => val.toString().length === 9, {
      message: "O número de telefone deve conter exatamente 9 dígitos",
    })
    .refine((val) => val > 0, "O número de telefone é obrigatório"),
  afrimoney: z
    .number({ message: "O número da afrimoney deve ser um número inteiro" })
    .int("Deve ser um número inteiro")
    .refine((val) => val.toString().length === 9, {
      message: "O número da afrimoney deve conter exatamente 9 dígitos",
    })
    .refine((val) => val > 0, "O número da afrimoney é obrigatório"),
  pos_id: z.string().optional(),
  agent_type: z
    .enum([AgentTypeEnum.LOTARIA_NACIONAL, AgentTypeEnum.REVENDOR], {
      message: "Tipo de agente inválido",
    })
    .refine((val: string) => val !== "", {
      message: "O tipo de agente é obrigatório",
    }),
  status: z
    .nativeEnum(AgentStatusEnum)
    .default(AgentStatusEnum.INACTIVE)
    .optional(),
  type_id: z.string().optional(),
  terminal_id: z.string().optional(),
  bi_number: z.string().optional(),
  genre: z.nativeEnum(AgentGenreEnum).optional(),
})

export type TRegisterAgentDTO = z.infer<typeof registerAgentSchema>
