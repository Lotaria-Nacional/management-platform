import { PosAvaliation, PosItem } from "@/domain/pos/enterprise/entities/pos-avaliation.entity";

export interface ISubmitPosAvaliationRequestDTO {
    items:PosItem[]
    additional_info?:string | null
    image?:string | null
}

export interface ISubmitPosAvaliationResponseDTO {
    pos_avaliation:PosAvaliation
}