import { PosAvaliation } from "@/domain/pos/enterprise/entities/pos-avaliation.entity";
import { IPosAvaliationRepository } from "@/domain/pos/application/interfaces/pos-avaliation-repository.interface";
import { SubmitPosAvaliationUseCaseRequestDTO, SubmitPosAvaliationUseCaseResponseDTO } from "@/domain/pos/application/dto/pos-avaliation/submit-pos-avaliation.dto";

export class SubmitPosAvaliationUseCase {
    constructor(private posAvaliationRepository:IPosAvaliationRepository){}

    async execute({ items,additional_info,image }:SubmitPosAvaliationUseCaseRequestDTO):Promise<SubmitPosAvaliationUseCaseResponseDTO>{

        const pos_avaliation = PosAvaliation.create({
            image,
            items,
            additional_info
        }) 

        const result = await this.posAvaliationRepository.save(pos_avaliation)


        return { 
            pos_avaliation
        }
    }
}