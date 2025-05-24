export interface IAddPosRequestDTO {
  id_reference: number
  coordinates: number[]
  province_id: string
  city_id: string
  area_id: string
  zone_id: string
  type_id: string
  subtype_id?: string
  licence_id: string
  agent_id: string
  status: boolean
  administration_id: string
}

export interface IAddPosResponseDTO {}
