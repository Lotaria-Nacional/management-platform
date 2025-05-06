import { InMemoryAgentsRepository } from "@test/infrastructure/in-memory-agent.repository";
import { RegisterAgentUseCase } from "@/domain/agent/application/use-cases/register-agent.useCase";
import { IRegisterAgentRequestDTO } from "@/domain/agent/application/dto/register-agent.dto";

let agentRepository:InMemoryAgentsRepository
let sut:RegisterAgentUseCase

describe("Register Agent", ()=>{
    
    beforeEach(()=>{
        agentRepository = new InMemoryAgentsRepository()
        sut = new RegisterAgentUseCase(agentRepository)
    })
    
    it("should be able to register an agent", async ()=>{

        const request:IRegisterAgentRequestDTO = {
            afrimoney:"9093508935",
            agent_id:"3353535",
            area:"A",
            zone:"13",
            city:"Luanda",
            name:"John",
            lastname:"Doe",
            phone_number:"+244999999999",
            province:"Luanda",
            status:"ACTIVE",
            terminal_id:"terminal"
        }
        await sut.execute(request)
        
        expect(agentRepository.items).toHaveLength(1)
        expect(agentRepository.items[0].first_name).toEqual("John")
    })

})