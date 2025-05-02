import { Pos } from "@/domain/pos/enterprise/entities/pos.entity"

export type FetchPosUseCaseRequest = {}

export type FetchPosUseCaseResponse = {
    pos:Pos[]
}