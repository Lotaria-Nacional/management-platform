import { IAddPosRequestDTO } from "../dto/add-pos.dto";
import { Pos } from "@/domain/pos/enterprise/entities/pos.entity";
import { IPosRepository } from "../interfaces/pos-repository.interface";

export class AddPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(data:IAddPosRequestDTO):Promise<void>{
        const { agent_id,
            area,
            coordinates,
            id_pos,
            id_reference_pos,
            licence,
            province,
            type,
            zone,
            admin
        } = data

        const pos = Pos.create({
            area,city:province,
            province,
            coordinates,
            id_pos: id_pos ?? id_reference_pos,
            id_reference_pos,
            licence,
            type,
            zone,
            admin,
            agent_id,
        })

        await this.posRepository.create(pos)
    }
}