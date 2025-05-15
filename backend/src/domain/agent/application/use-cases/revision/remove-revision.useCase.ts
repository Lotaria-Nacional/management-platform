import { IRemoveRevisionRequestDTO } from "../../dto/revision/remove-revision.dto";
import { IRevisionRepository } from "../../interfaces/revision-repository.interface";

export class RemoveRevisionUseCase {
    constructor(private repo:IRevisionRepository){}

    async execute({ id }:IRemoveRevisionRequestDTO){
        
        const revision = await this.repo.getById(id)
        
        if(!revision){
            throw new Error("Revision not found.")
        }

        await this.repo.delete(id)

    }
}