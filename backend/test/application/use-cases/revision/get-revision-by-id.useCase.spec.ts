import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"
import { InMemoryRevisionsRepository } from "@test/infrastructure/in-memory-revision.repository"
import { GetRevisionByIdUseCase } from "@/domain/agent/application/use-cases/revision/get-revision-by-id.useCase"

let sut: GetRevisionByIdUseCase
let repo: InMemoryRevisionsRepository

describe("Revision UseCase", ()=>{
    beforeEach(()=>{
        repo = new InMemoryRevisionsRepository()
        sut = new GetRevisionByIdUseCase(repo)
    })
    
    it("should get a revision by id", async()=>{
        const revision = Revision.create({
            agent_id:"1be5646dsinafmf003",
            additional_info:"An additional information just because.",
            image:"A fake image",
            items:{
                glasses:true,
                chair:true
            },
        })

        await repo.create(revision)

        const { revision:result } = await sut.execute({id: revision.id})

        expect(result.id).toBe(revision.id)
    })
})