import { PosEntity } from "@/features/pos/types"

export type ZoneEntity = {
  id: string
  zone_number: number
}
export type AreaEntity = {
  id: string
  zones: ZoneEntity[]
  name: number
}
export type TypeEntity = {
  id: string
  name: string
  subtype: SubtypeEntity[]
}
export type SubtypeEntity = {
  id: string
  name: string
}
export type LicenceEntity = {
  id: string
  status: boolean
  reference_id: string
  pos?: Partial<PosEntity> | undefined
  administration_id?: string
}
export type AdministrationEntity = {
  id: string
  name: string
  province: ProvinceEntity
}
export type CityEntity = {
  id: string
  name: string
  province: ProvinceEntity
  areas: AreaEntity[]
}
export type ProvinceEntity = {
  id: string
  name: string
  cities: CityEntity[]
}

export type InfiniteQueryResponse<T> = {
  data: T[]
  currentPage: number
  totalPages: number
}
