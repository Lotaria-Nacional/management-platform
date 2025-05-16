import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"
import { InMemoryRevisionsRepository } from "@test/infrastructure/in-memory-revision.repository"
import { MakeRevisionUseCase } from "@/domain/agent/application/use-cases/revision/make-revision.useCase"

let sut: MakeRevisionUseCase
let repo: InMemoryRevisionsRepository

describe("Revision UseCase", ()=>{
    beforeEach(()=>{
        repo = new InMemoryRevisionsRepository()
        sut = new MakeRevisionUseCase(repo)
    })
    
    it("should make a revision", async()=>{
        const revision = Revision.create({
            agent_id:"1be5646dsinafmf003",
            additional_info:"An additional information just because.",
            image:"A fake image",
            items:{
                glasses:true,
                chair:true
            },
        })

        await sut.execute(revision)

        expect(repo.items).toHaveLength(1)
    })
})