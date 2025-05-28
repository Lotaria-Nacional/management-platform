import { PosEntity } from "../pos/types"
import { RevisionEntity } from "../revision/types"
import { TerminalEntity } from "../terminal/types"

export interface AgentEntity {
  id: string
  agent_id: string
  afrimoney: string
  first_name: string
  last_name: string
  phone: string
  status: string
  pos?: PosEntity | null
  revision?: RevisionEntity | null
  terminal?: TerminalEntity | null
}

export interface EditAgentRequestDTO extends Partial<AgentEntity> {
  id: string
  pos_id?: string
}

export interface RegisterAgentRequestDTO extends Omit<AgentEntity, "id"> {
  pos_id?: string
}
