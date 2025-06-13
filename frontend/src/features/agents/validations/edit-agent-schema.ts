import { z } from "zod"
import { AgentStatusEnum } from "../enums/agent-status"

export const editAgentSchema = z.object({
  id: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z.coerce.number().nullable().optional(),
  agent_type: z.enum(["REVENDEDOR", "LOTARIA-NACIONAL"]).optional(),
  afrimoney: z.coerce.number().nullable().optional(),
  pos_id: z.string().optional(),
  status: z.nativeEnum(AgentStatusEnum).optional(),
  terminal_id: z.string().optional(),
})

export type EditAgentDTO = z.infer<typeof editAgentSchema>
