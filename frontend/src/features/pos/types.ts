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
  id_reference: number
  status?: boolean
  latitude: number
  longitude: number
  city: CityEntity
  zone: ZoneEntity
  type: TypeEntity
  subtype?: SubtypeEntity
  area: AreaEntity
  agent?: AgentEntity
  licence?: LicenceEntity
  province: ProvinceEntity
  administration?: AdministrationEntity
  created_at: Date
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
