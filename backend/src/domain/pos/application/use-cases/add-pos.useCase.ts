import { IAddPosRequestDTO } from "../dto/add-pos.dto";
import { Pos } from "@/domain/pos/enterprise/entities/pos.entity";
import { IPosRepository } from "../interfaces/pos-repository.interface";

export class AddPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(data:IAddPosRequestDTO):Promise<void>{
        const pos = Pos.create(data)
        await this.posRepository.create(pos)
    }
}