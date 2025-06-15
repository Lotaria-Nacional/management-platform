import { z } from "zod"
import { AgentStatusEnum } from "../enums/agent-status"
import { AgentGenreEnum } from "../enums/agent-genre"
import { AgentTypeEnum } from "../enums/agent-types"

export const editAgentSchema = z.object({
  id: z.string(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  phone: z.coerce.number().nullable().optional(),
  agent_type: z.nativeEnum(AgentTypeEnum).optional(),
  afrimoney: z.coerce.number().nullable().optional(),
  pos_id: z.string().optional(),
  status: z.nativeEnum(AgentStatusEnum).optional(),
  terminal_id: z.string().optional(),
  bi_number: z.string().optional(),
  genre: z.nativeEnum(AgentGenreEnum).optional(),
})

export type EditAgentDTO = z.infer<typeof editAgentSchema>
