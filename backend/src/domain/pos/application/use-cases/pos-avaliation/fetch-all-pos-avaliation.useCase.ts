import { IFetchAllPosAvaliationRequestDTO } from "../../dto/pos-avaliation/fetch-all-pos-avaliation.dto";
import { IPosAvaliationRepository } from "@/domain/pos/application/interfaces/pos-avaliation-repository.interface";


export class FetchAllPosAvaliationUseCase {
    constructor(private posAvaliationRepository:IPosAvaliationRepository){}

    async execute():Promise<IFetchAllPosAvaliationRequestDTO>{

        const pos_avaliation = await this.posAvaliationRepository.fetchAll()

        return { 
            pos_avaliation
        }
    }
}