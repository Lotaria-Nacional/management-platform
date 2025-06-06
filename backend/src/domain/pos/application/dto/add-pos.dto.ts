export interface IAddPosRequestDTO {
  id_reference: number
  coordinates: string[]
  province_id: string
  city_id: string
  area_id: string
  zone_id: string
  type_id: string
  subtype_id?: string
  licence_id?: string | null
  agent_id: string
  administration_id?: string
}

export interface IAddPosResponseDTO {}
