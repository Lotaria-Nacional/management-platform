import { PosAvaliation, PosItem } from "@/domain/pos/enterprise/entities/pos-avaliation.entity";

export interface SubmitPosAvaliationUseCaseRequestDTO {
    items:PosItem[]
    additional_info?:string | null
    image?:string | null
}

export interface SubmitPosAvaliationUseCaseResponseDTO {
    pos_avaliation:PosAvaliation
}