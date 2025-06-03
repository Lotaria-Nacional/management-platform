import { PosEntity } from "../pos/types"
import { IFetchDataResponse } from "@/app/types"
import { TerminalEntity } from "../terminal/types"
import { RevisionEntity } from "../supervision/types"

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

export interface IFetchAgentsResponse extends IFetchDataResponse<AgentEntity>{}

export interface EditAgentRequestDTO extends Partial<AgentEntity> {
  id: string
  pos_id?: string
}

export interface RegisterAgentRequestDTO extends Omit<AgentEntity, "id"> {
  pos_id?: string
}
