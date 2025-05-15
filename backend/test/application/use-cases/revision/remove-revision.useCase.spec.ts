import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"
import { InMemoryRevisionsRepository } from "@test/infrastructure/in-memory-revision.repository"
import { RemoveRevisionUseCase } from "@/domain/agent/application/use-cases/revision/remove-revision.useCase"

let sut: RemoveRevisionUseCase
let repo: InMemoryRevisionsRepository

describe("Revision UseCase", ()=>{
    beforeEach(()=>{
        repo = new InMemoryRevisionsRepository()
        sut = new RemoveRevisionUseCase(repo)
    })
    
    it("should remove a revision", async()=>{
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

        await sut.execute({id: revision.id})

        expect(repo.items).toHaveLength(0)
    })
})