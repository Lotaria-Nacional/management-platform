import { IFetchPosResponseDTO } from "../dto/fetch-many-pos.dto"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class FetchManyPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute():Promise<IFetchPosResponseDTO>{

        const pos = await this.posRepository.fetchMany()

        return { pos }
    }
}