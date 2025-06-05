import { IAddLicenceDTO } from "../../dto/licence/add-licence.dto";
import { Licence } from "@/domain/pos/enterprise/entities/licence.entity";
import { ILicenceRepository } from "../../interfaces/licence-repository.interface";

export class AddLicenceUseCase {
    constructor(private repo:ILicenceRepository){}

    async execute({ reference_id,status,administration_id,pos_id }:IAddLicenceDTO){
        const licence = Licence.create({
            reference_id,
            status,
            administration_id,
            pos_id: pos_id,
        })

        await this.repo.create(licence)
    }
}