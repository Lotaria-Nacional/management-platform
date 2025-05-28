// import { InMemoryAgentsRepository } from "@test/infrastructure/in-memory-agent.repository";
// import { IRegisterAgentRequestDTO } from "@/domain/agent/application/dto/agent/register-agent.dto";
// import { RegisterAgentUseCase } from "@/domain/agent/application/use-cases/agent/register-agent.useCase";

// let agentRepository:InMemoryAgentsRepository
// let sut:RegisterAgentUseCase

// describe("Register Agent", ()=>{
    
//     beforeEach(()=>{
//         agentRepository = new InMemoryAgentsRepository()
//         sut = new RegisterAgentUseCase(agentRepository)
//     })
     
//     it("should be able to register an agent", async ()=>{

//         const request:IRegisterAgentRequestDTO = {
//             afrimoney:"9093508935",
//             first_name:"John",
//             last_name:"Doe",
//             phone:"+244999999999",
//             status:"ACTIVE",
//             terminal_id:"terminal"
//         }

//         const request2:IRegisterAgentRequestDTO = {
//             afrimoney:"9093508935",
//             first_name:"John",
//             last_name:"Doe",
//             phone:"+244999999999",
//             status:"ACTIVE",
//             terminal_id:"terminal"
//         }

//         await sut.execute(request)
//         await sut.execute(request2)
        
//         expect(agentRepository.items).toHaveLength(2)
//         expect(agentRepository.items[0].first_name).toEqual("John")
//     })

// })