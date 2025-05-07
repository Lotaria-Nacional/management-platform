import { PosAvaliation } from "@/domain/pos/enterprise/entities/pos-avaliation.entity";

export interface IFetchAllPosAvaliationRequestDTO { }

export interface IFetchAllPosAvaliationResponseDTO {
    pos_avaliation:PosAvaliation[]
}