import { ILicenceRepository } from "../../interfaces/licence-repository.interface";

export class RemoveLicenceUseCase {
    constructor(private repo:ILicenceRepository){}

    async execute(id:string){
        const licence = await this.repo.getById(id)
        
        if(!licence){
            throw new Error("A licença solicitada não existe.")
        }

        await this.repo.delete(licence.id)
    }
}