// import path from "path"
// import { readFileSync } from "fs"
// import { Agent, AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"
// import { UploadAgentUseCase } from "@/domain/agent/application/use-cases/agent/upload-agent.useCase"
// import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"

// export function makeAgents(repository:IAgentRepository){

//     const agentXlsxFile = path.resolve("test/assets/agentes.xlsx")
//     const agentBuffer = readFileSync(agentXlsxFile)
    
//     const useCase = new UploadAgentUseCase(repository)

//     const res = useCase.execute({buffer:agentBuffer})

//     return res
// }

// export function makeAgent(id:string,props?:AgentProps,){

//     const agent = Agent.create({
//         afrimoney:"afrimoney",
//         agent_id:"agent_id",
//         city:"city",
//         first_name:"john",
//         last_name:"doe",
//         phone:"phone",
//         province:"province",
//         status:"status",
//         zone:"zone",
//         ...props
//     },id)

//     return { agent }
// }