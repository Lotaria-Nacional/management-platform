import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"

export interface IGetRevisionByIdRequestDTO {
    id:string
}

export interface IGetRevisionByIdResponseDTO {
    revision:Revision
}