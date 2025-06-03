import { IFetchDataResponse } from "@/app/types"
import { AgentEntity } from "../agents/types"

export interface TerminalEntity {
  id: string
  id_terminal: string
  agent_id: string
  serial: string
  sim_card: string
  agent?: AgentEntity | null
}
export interface IFetchTerminalResponse extends IFetchDataResponse<TerminalEntity> {}

export interface IAddTerminalRequestDTO extends Omit<TerminalEntity, "id"> {
  agent_id: string
}
export interface IEditTerminalRequestDTO extends Partial<TerminalEntity> {
  agent_id?: string
}
