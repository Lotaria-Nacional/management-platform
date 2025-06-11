import { PosEntity } from "../pos/types"
import { IFetchDataResponse } from "@/app/types"
import { TerminalEntity } from "../terminal/types"

export type AgentType = "LOTARIA-NACIONAL" | "REVENDEDOR"

export interface AgentEntity {
  id: string
  type: AgentType
  phone: number | null
  pos_id?: string
  last_name: string
  first_name: string
  terminal_id?: string
  id_reference: number
  status: string | null
  afrimoney: number | null
  pos?: PosEntity
  terminal?: TerminalEntity
  // supervision?: RevisionEntity
}

export interface IFetchAgentsResponse extends IFetchDataResponse<AgentEntity> {}