import path from "path"
import { readFileSync } from "fs"
import { UploadAgentUseCase } from "@/domain/agent/application/use-cases/upload-agent.useCase"
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"

export function makeAgents(repository:IAgentRepository){

    const agentXlsxFile = path.resolve("test/assets/agentes.xlsx")
    const agentBuffer = readFileSync(agentXlsxFile)
    
    const useCase = new UploadAgentUseCase(repository)

    const res = useCase.execute({buffer:agentBuffer})

    return res
}