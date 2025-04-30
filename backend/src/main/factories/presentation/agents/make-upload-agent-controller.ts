import { UploadAgentUseCase } from "@/domain/agent/application/use-cases/upload-agent.useCase"
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"
import { UploadAgentsController } from "@/domain/agent/presentation/controllers/upload-agents.controller"

export function makeUploadAgentsController(agentRepository:IAgentRepository){
    const importAgentUseCase = new UploadAgentUseCase(agentRepository)
    const uploadAgentsController = new UploadAgentsController(importAgentUseCase)
    return { uploadAgentsController } 
}