import { RegisterAgentUseCase } from "@/domain/agent/application/use-cases/register-agent.useCase"
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"
import { RegisterAgentController } from "@/domain/agent/presentation/controllers/regsiter-agent.controller"

export function makeRegisterSgentController(agentRepository:IAgentRepository){
    const importAgentUseCase = new RegisterAgentUseCase(agentRepository)
    const registerAgentController = new RegisterAgentController(importAgentUseCase)
    return { registerAgentController } 
}