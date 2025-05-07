import { Pos } from "@/domain/pos/enterprise/entities/pos.entity"

export interface IEditPosRequestDTO {
    id:string
    id_pos?:string
    id_reference_pos?:string | null
    coordinates?:string
    type?:string
    admin?:string | null
    licence?:string 
    zone?:string
    area?:string
    city?:string
    province?:string
}

export interface IEditPosResponseDTO {
    pos: Pos
}