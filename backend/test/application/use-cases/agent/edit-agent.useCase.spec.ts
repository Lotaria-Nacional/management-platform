// import { makeAgent } from "@test/factories/make-agents";
// import { InMemoryAgentsRepository } from "@test/infrastructure/in-memory-agent.repository";
// import { EditAgentUseCase } from "@/domain/agent/application/use-cases/agent/edit-agent.useCase";

// let sut:EditAgentUseCase
// let repo:InMemoryAgentsRepository

// describe("Edit Agent", ()=>{
    
//     beforeEach(()=>{
//         repo = new InMemoryAgentsRepository()
//         sut = new EditAgentUseCase(repo)
//     })
    
//     it("should be able to edit an agent", async ()=>{
//         const ID = "1234"

//         const { agent:newAgent } = makeAgent(ID)
        
//         repo.create(newAgent)

//         //  await sut.execute({ id:ID, name:"paulo" })

//          expect(repo.items[0].id).toBe(ID)
//         //  expect(repo.items[0].props.first_name).toBe("paulo")

//     })
// })