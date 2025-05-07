import { Pos } from "@/domain/pos/enterprise/entities/pos.entity";
import { IPosRepository } from "../../interfaces/pos-repository.interface";
import { RegisterPosRequestDTO, RegisterPosResponseDTO } from "../../dto/pos/register-pos.dto";

export class RegisterPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(data:RegisterPosRequestDTO):Promise<RegisterPosResponseDTO>{
        const pos = Pos.create(data)
        await this.posRepository.create(pos)

        return { pos }
    }
}