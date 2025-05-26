import { AgentEntity } from "../agents/types"
import {
  ZoneEntity,
  AreaEntity,
  TypeEntity,
  CityEntity,
  LicenceEntity,
  ProvinceEntity,
} from "@/app/types"

export type PosEntity = {
  id: string
  admin?: string | null
  id_reference: string | null
  coordinates: number[]
  zone: ZoneEntity
  area: AreaEntity
  type: TypeEntity
  province: ProvinceEntity
  city: CityEntity
  licence: LicenceEntity
  agent_id?: string
  agent: Pick<AgentEntity, "first_name" | "last_name" | "id">
}

export interface IAddPosRequestDTO {
  admin_id: string
  id_reference: string
  coordinates: string
  zone_id: string
  area_id: string
  type_id: string
  subtype_id: string
  province_id: string
  city_id: string
  licence_id_id: string
  agent_id: string
}

export interface IEditPosRequestDTO extends Omit<PosEntity, "agent"> {}
