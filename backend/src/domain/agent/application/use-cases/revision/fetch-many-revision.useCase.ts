import { IRevisionRepository } from "../../interfaces/revision-repository.interface";
import { IFetchManyRevisionRequestDTO } from "../../dto/revision/fetch-many-revision.dto";

export class FetchManyRevisionsUseCase {
    constructor(private revisionRepo:IRevisionRepository){}

    async execute():Promise<IFetchManyRevisionRequestDTO>{

        const revisions = await this.revisionRepo.fetchMany()

        return { revisions }
    }
}