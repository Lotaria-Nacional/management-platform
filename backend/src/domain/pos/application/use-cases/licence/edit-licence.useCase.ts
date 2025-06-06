import { IEditLicenceDTO } from "../../dto/licence/add-licence.dto";
import { ILicenceRepository } from "../../interfaces/licence-repository.interface";

export class EditLicenceUseCase {
    constructor(private repo:ILicenceRepository){}

    async execute({ id,reference_id,status,administration_id,pos_id }:IEditLicenceDTO){
        const licence = await this.repo.getById(id)
        
        if(!licence){
            throw new Error("A licença solicitada não existe.")
        }

        if(reference_id !== undefined){
            licence.props.reference_id = reference_id
        }
        if(status !== undefined){
            licence.props.status = status
        }
        if(administration_id !== undefined){
            licence.props.administration_id = administration_id
        }
        if(pos_id !== undefined){
            licence.props.pos_id = pos_id
        }

        licence.checkLicenceStatus()

        await this.repo.save(licence)
    }
}