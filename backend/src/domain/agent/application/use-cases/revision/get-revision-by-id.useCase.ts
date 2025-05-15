import { IRevisionRepository } from "../../interfaces/revision-repository.interface";
import { IGetRevisionByIdRequestDTO, IGetRevisionByIdResponseDTO } from "../../dto/revision/get-revision-by-id.dto";

export class GetRevisionByIdUseCase {
    constructor(private repo:IRevisionRepository){}

    async execute({ id }:IGetRevisionByIdRequestDTO):Promise<IGetRevisionByIdResponseDTO>{
        
        const revision = await this.repo.getById(id)

        if(!revision) {
            throw new Error("")
        }

        return {
            revision
        }
    }
}