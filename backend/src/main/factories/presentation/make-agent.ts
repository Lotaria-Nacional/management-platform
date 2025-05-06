import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface";
import { RegisterAgentController } from "@/domain/agent/presentation/controllers/regsiter-agent.controller";
import { EditAgentController }     from "@/domain/agent/presentation/controllers/edit-agent.controller";
import { FetchAgentsController }   from "@/domain/agent/presentation/controllers/fetch-agents.controller";
import { UploadAgentsController }  from "@/domain/agent/presentation/controllers/upload-agents.controller";
import { RegisterAgentUseCase }    from "@/domain/agent/application/use-cases/register-agent.useCase";
import { EditAgentUseCase }        from "@/domain/agent/application/use-cases/edit-agent.useCase";
import { FetchAgentsUseCase }      from "@/domain/agent/application/use-cases/fetch-agents.useCase";
import { UploadAgentUseCase }      from "@/domain/agent/application/use-cases/upload-agent.useCase";

export function makeAgentControllers(repository: IAgentRepository) {
  const registerAgentController = new RegisterAgentController(
    new RegisterAgentUseCase(repository)
  );
  const editAgentController = new EditAgentController(
    new EditAgentUseCase(repository)
  );
  const fetchAgentsController = new FetchAgentsController(
    new FetchAgentsUseCase(repository)
  );
  const uploadAgentsController = new UploadAgentsController(
    new UploadAgentUseCase(repository)
  );

  return {
    registerAgentController,
    editAgentController,
    fetchAgentsController,
    uploadAgentsController,
  };
}