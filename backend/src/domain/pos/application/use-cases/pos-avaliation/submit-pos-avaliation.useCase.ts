import { PosAvaliation } from "@/domain/pos/enterprise/entities/pos-avaliation.entity";
import { IPosAvaliationRepository } from "@/domain/pos/application/interfaces/pos-avaliation-repository.interface";
import { ISubmitPosAvaliationRequestDTO, ISubmitPosAvaliationResponseDTO } from "@/domain/pos/application/dto/pos-avaliation/submit-pos-avaliation.dto";

export class SubmitPosAvaliationUseCase {
    constructor(private posAvaliationRepository:IPosAvaliationRepository){}

    async execute({ items,additional_info,image }:ISubmitPosAvaliationRequestDTO):Promise<ISubmitPosAvaliationResponseDTO>{

        const pos_avaliation = PosAvaliation.create({
            image,
            items,
            additional_info
        }) 

        await this.posAvaliationRepository.save(pos_avaliation)

        return { 
            pos_avaliation
        }
    }
}