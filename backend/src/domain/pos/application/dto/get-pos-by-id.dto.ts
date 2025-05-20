import { Pos } from "../../enterprise/entities/pos.entity"

export interface IGetPosByIdRequestDTO {
    id:string
}

export interface IGetPosByIdResponseDTO {
    pos: Pos 
}  