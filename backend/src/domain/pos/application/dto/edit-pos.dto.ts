export interface IEditPosRequestDTO {
    id:string
    id_reference?:number
    coordinates?:number[]
    type_id?:string
    subtype_id?:string
    administration_id?:string
    licence_id?: string | null; 
    zone_id?:string
    area_id?:string
    city_id?:string
    province_id?:string
}

export interface IEditPosResponseDTO {}