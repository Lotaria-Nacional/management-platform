import { IFetchDataResponse } from "@/app/types"
import { AgentEntity } from "../agents/types"

export interface TerminalEntity {
  id: string
  id_reference: number
  serial: string
  sim_card: number
  agent_id: string
  pin: number | null
  puk: number | null
  agent?: AgentEntity | null
}
export interface IFetchTerminalResponse
  extends IFetchDataResponse<TerminalEntity> {}
