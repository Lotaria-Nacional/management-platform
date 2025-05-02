import { PosAvaliation } from "@/domain/pos/enterprise/entities/pos-avaliation.entity";

export interface FetchAllPosAvaliationUseCaseRequestDTO { }

export interface FetchAllPosAvaliationUseCaseResponseDTO {
    pos_avaliation:PosAvaliation[]
}