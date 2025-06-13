import { EditAgentUseCase } from "@/domain/agent/application/use-cases/agent/edit-agent.useCase"
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"
import { RegisterAgentUseCase } from "@/domain/agent/application/use-cases/agent/register-agent.useCase"
import { GetAgentByIdUseCase } from "@/domain/agent/application/use-cases/agent/get-agent-by-id.useCase"
import { EditAgentController } from "@/domain/agent/presentation/controllers/agent/edit-agent.controller"
import { FetchManyAgentsUseCase } from "@/domain/agent/application/use-cases/agent/fetch-many-agents.useCase"
import { GetAgentByIdController } from "@/domain/agent/presentation/controllers/agent/get-agent-by-id.controller"
import { RegisterAgentController } from "@/domain/agent/presentation/controllers/agent/register-agent.controller"
import { FetchManyAgentsController } from "@/domain/agent/presentation/controllers/agent/fetch-many-agents.controller"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"

export function makeAgentControllers(repository: IAgentRepository, posRepository:IPosRepository) {
  const registerAgentController = new RegisterAgentController(
    new RegisterAgentUseCase(repository, posRepository)
  )
  const editAgentController = new EditAgentController(
    new EditAgentUseCase(repository)
  )
  const fetchManyAgentsController = new FetchManyAgentsController(
    new FetchManyAgentsUseCase(repository)
  )

  const getAgentByIdController = new GetAgentByIdController(
    new GetAgentByIdUseCase(repository)
  )

  return {
    registerAgentController,
    editAgentController,
    fetchManyAgentsController,
    getAgentByIdController
  }
}
