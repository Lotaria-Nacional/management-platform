import { IGetPosByIdResponseDTO } from "../dto/get-pos-by-id.dto"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class GetPosByIdUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(id:string):Promise<IGetPosByIdResponseDTO>{

        const pos = await this.posRepository.getById(id)

        if(!pos){
            throw new Error("Pos Not Found")
        }

        return { pos }
    }
}