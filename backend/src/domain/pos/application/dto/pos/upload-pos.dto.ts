import { Pos } from "@/domain/pos/enterprise/entities/pos.entity"

export interface IUploadPosRequestDTO {
    buffer:Buffer
}

export interface IUploadPosUesponseDTO {
    pos:Pos[]
}