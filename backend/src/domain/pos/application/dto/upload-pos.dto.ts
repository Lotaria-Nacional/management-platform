import { Pos } from "../../enterprise/entities/pos.entity"

export type UploadPosUseCaseRequest = {
    buffer:Buffer
}

export type UploadPosUseCaseResponse = {
    pos:Pos[]
}