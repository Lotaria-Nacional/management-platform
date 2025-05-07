import { IFetchPosRequestDTO } from "../../dto/pos/fetch-pos.dto";
import { IPosRepository } from "../../interfaces/pos-repository.interface";

export class FetchPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute():Promise<IFetchPosRequestDTO>{

        const pos = await this.posRepository.fetchAll()

        return { pos }
    }
}