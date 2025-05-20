import { AgentEntity } from "../agents/types"

export type PosEntity = {
  id: string
  admin?: string | null
  id_reference_pos?: string | null
  id_pos: string
  coordinates: string
  zone: string
  area: string
  type: string
  province: string
  city: string
  licence: string
  agent_id?: string
  agent: Pick<AgentEntity, "first_name" | "last_name" | "id">
}

export interface IAddPosRequestDTO extends Omit<PosEntity, "id" | "agent"> {}

export interface IEditPosRequestDTO extends Omit<PosEntity, "agent"> {}