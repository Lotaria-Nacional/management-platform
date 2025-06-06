import { AgentEntity } from "../agents/types"
import {
  ZoneEntity,
  AreaEntity,
  TypeEntity,
  CityEntity,
  ProvinceEntity,
  AdministrationEntity,
  SubtypeEntity,
  IFetchDataResponse,
} from "@/app/types"
import { LicenceEntity } from "../licence/components/types"

export type PosEntity = {
  id: string
  administration: AdministrationEntity
  id_reference: number | null
  coordinates: string[]
  zone: ZoneEntity
  area: AreaEntity
  type: TypeEntity
  subtype: SubtypeEntity
  province: ProvinceEntity
  city: CityEntity
  licence?: LicenceEntity
  agent_id?: string
  agent: Pick<
    AgentEntity,
    "first_name" | "last_name" | "id" | "agent_id" | "phone"
  >
}

export interface IFetchPosResponse extends IFetchDataResponse<PosEntity> {}

export interface IAddPosRequestDTO {
  administration_id: string
  id_reference: number
  coordinates: string[]
  zone_id: string
  area_id: string
  type_id: string
  subtype_id: string
  province_id: string
  city_id: string
  licence_id: string
  agent_id: string
}

export interface IEditPosRequestDTO {
  id: string
  administration_id?: string
  id_reference?: number | null
  coordinates?: string[]
  zone_id?: string
  area_id?: string
  type_id?: string
  subtype_id?: string
  province_id?: string
  city_id?: string
  licence_id?: string
  agent_id?: string
  coords: string
}
