import { makeRevisions } from "@test/factories/make-revision"
import { InMemoryRevisionsRepository } from "@test/infrastructure/in-memory-revision.repository"
import { FetchManyRevisionsUseCase } from "@/domain/agent/application/use-cases/revision/fetch-many-revision.useCase"

let sut: FetchManyRevisionsUseCase
let repo: InMemoryRevisionsRepository

describe("Fetch Many Revisions UseCase", ()=>{
    beforeEach(()=>{
        repo = new InMemoryRevisionsRepository()
        sut = new FetchManyRevisionsUseCase(repo)
    })
    
    it("should fetch many revisions", async()=> {
        const { revision } = makeRevisions("idwoierw")

        await repo.create(revision)

        const { revisions } = await sut.execute()

        expect(revisions).toHaveLength(1)
    })
})