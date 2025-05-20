import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"
import { RegisterAgentController } from "@/domain/agent/presentation/controllers/agent/register-agent.controller"
import { EditAgentController } from "@/domain/agent/presentation/controllers/agent/edit-agent.controller"
import { FetchAgentsController } from "@/domain/agent/presentation/controllers/agent/fetch-agents.controller"
import { UploadAgentsController } from "@/domain/agent/presentation/controllers/agent/upload-agents.controller"
import { EditAgentUseCase } from "@/domain/agent/application/use-cases/agent/edit-agent.useCase"
import { FetchAgentsUseCase } from "@/domain/agent/application/use-cases/agent/fetch-agents.useCase"
import { UploadAgentUseCase } from "@/domain/agent/application/use-cases/agent/upload-agent.useCase"
import { RegisterAgentUseCase } from "@/domain/agent/application/use-cases/agent/register-agent.useCase"


export function makeAgentControllers(repository: IAgentRepository) {
  const registerAgentController = new RegisterAgentController(
    new RegisterAgentUseCase(repository)
  )
  const editAgentController = new EditAgentController(
    new EditAgentUseCase(repository)
  )
  const fetchAgentsController = new FetchAgentsController(
    new FetchAgentsUseCase(repository)
  )
  const uploadAgentsController = new UploadAgentsController(
    new UploadAgentUseCase(repository)
  )

  return {
    registerAgentController,
    editAgentController,
    fetchAgentsController,
    uploadAgentsController,
  }
}
