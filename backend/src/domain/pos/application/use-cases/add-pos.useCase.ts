import { IAddPosRequestDTO } from "../dto/add-pos.dto";
import { Pos } from "@/domain/pos/enterprise/entities/pos.entity";
import { IPosRepository } from "../interfaces/pos-repository.interface";

export class AddPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(data:IAddPosRequestDTO):Promise<void>{
        const { agent_id,
            area,
            coordinates,
            id_reference,
            licence,
            province,
            type,
            zone,
            administration,
            city, 
            status,
             subtype
        } = data

        const pos = Pos.create({
            area,
            city,
            province,
            coordinates,
            id_reference,
            licence,
            type,
            zone,
            administration,
            agent_id,
            status,
            subtype,
        })

        await this.posRepository.create(pos)
    }
}