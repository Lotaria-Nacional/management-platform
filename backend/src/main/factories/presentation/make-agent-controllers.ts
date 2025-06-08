import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"
import { RegisterAgentController } from "@/domain/agent/presentation/controllers/agent/register-agent.controller"
import { EditAgentController } from "@/domain/agent/presentation/controllers/agent/edit-agent.controller"
import { FetchManyAgentsController } from "@/domain/agent/presentation/controllers/agent/fetch-many-agents.controller"
import { EditAgentUseCase } from "@/domain/agent/application/use-cases/agent/edit-agent.useCase"
import { FetchManyAgentsUseCase } from "@/domain/agent/application/use-cases/agent/fetch-agents.useCase"
import { RegisterAgentUseCase } from "@/domain/agent/application/use-cases/agent/register-agent.useCase"

export function makeAgentControllers(repository: IAgentRepository) {
  const registerAgentController = new RegisterAgentController(
    new RegisterAgentUseCase(repository)
  )
  const editAgentController = new EditAgentController(
    new EditAgentUseCase(repository)
  )
  const fetchManyAgentsController = new FetchManyAgentsController(
    new FetchManyAgentsUseCase(repository)
  )

  return {
    registerAgentController,
    editAgentController,
    fetchManyAgentsController,
  }
}
