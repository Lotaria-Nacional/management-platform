import { Pos } from "../../enterprise/entities/pos.entity"

export type FetchPosUseCaseRequest = {}

export type FetchPosUseCaseResponse = {
    pos:Pos[]
}