import { PosEntity } from "../pos/types"
import { AreaEntity, IFetchDataResponse, ProvinceEntity, TypeEntity, ZoneEntity } from "@/app/types"
import { TerminalEntity } from "../terminal/types"
import { AgentType } from "./enums/agent-types"
import { AgentStatus } from "./enums/agent-status"


export interface AgentEntity {
  id: string
  agent_type: AgentType
  phone: number | null
  pos_id?: string
  last_name: string
  first_name: string
  terminal_id?: string
  id_reference: number
  status: AgentStatus
  afrimoney: number | null
  zone: ZoneEntity | null
  area: AreaEntity | null
  province: ProvinceEntity | null
  type: TypeEntity | null
  pos?: PosEntity
  terminal?: TerminalEntity
  // supervision?: RevisionEntity
}

export interface IFetchAgentsResponse extends IFetchDataResponse<AgentEntity> {}