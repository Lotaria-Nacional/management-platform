import { Pos } from "@/domain/pos/enterprise/entities/pos.entity"

export interface IFetchPosRequestDTO {}

export interface IFetchPosResponseDTO {
    pos:Pos[]
}