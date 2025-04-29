import { InMemoryAgentsRepository } from "@test/infrastructure/in-memory-agent-repository"
import { UploadAgentUseCase } from "@/domain/agent/application/use-cases/upload-agent.useCase"
import { UploadAgentsController } from "@/domain/agent/presentation/controllers/upload-agents.controller"

export function makeUploadAgentsController(){
    const inMemoryAgentsRepository = new InMemoryAgentsRepository()
    const importAgentUseCase = new UploadAgentUseCase(inMemoryAgentsRepository)
    const uploadAgentsController = new UploadAgentsController(importAgentUseCase)
    return { uploadAgentsController } 
}