import { makeAgent } from "@test/factories/make-agents";
import { InMemoryAgentsRepository } from "@test/infrastructure/in-memory-agent.repository";
import { EditAgentUseCase } from "@/domain/agent/application/use-cases/edit-agent.useCase";

let sut:EditAgentUseCase
let agentRepository:InMemoryAgentsRepository

describe("Edit Agent", ()=>{
    
    beforeEach(()=>{
        agentRepository = new InMemoryAgentsRepository()
        sut = new EditAgentUseCase(agentRepository)
    })
    
    it("should be able to edit an agent", async ()=>{
        const ID = "1234"

        const { agent } = makeAgent(ID)
        
        agentRepository.create(agent)
         const res = await sut.execute({ id:ID, name:"paulo" })

         expect(res.agent.first_name).toBe("paulo")
         expect(res.agent.id).toBe(ID)

    })
})