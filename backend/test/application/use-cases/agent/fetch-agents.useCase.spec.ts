import { makeAgents } from "@test/factories/make-agents";
import { InMemoryAgentsRepository } from "@test/infrastructure/in-memory-agent.repository";
import { FetchAgentsUseCase } from "@/domain/agent/application/use-cases/fetch-agents.useCase";

let agentRepository:InMemoryAgentsRepository
let sut:FetchAgentsUseCase

describe("Fetch All Agents", ()=>{
    
    beforeEach(()=>{
        agentRepository = new InMemoryAgentsRepository()
        sut = new FetchAgentsUseCase(agentRepository)
    })
    it("should be able to fetch all agents", async ()=>{
        
        makeAgents(agentRepository)

        const { agents } = await sut.execute()
        
        expect(agents.length).toBeGreaterThan(1)
    })

})