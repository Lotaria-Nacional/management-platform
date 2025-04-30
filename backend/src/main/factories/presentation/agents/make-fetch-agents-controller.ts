import { FetchAgentsUseCase } from "@/domain/agent/application/use-cases/fetch-agents.useCase"
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"
import { FetchAgentsController } from "@/domain/agent/presentation/controllers/fetch-agents.controller"

export function makeFetchAgentsController(agentRepository:IAgentRepository){
    const importAgentUseCase = new FetchAgentsUseCase(agentRepository)
    const fetchAgentsController = new FetchAgentsController(importAgentUseCase)
    return { fetchAgentsController } 
}