import { IFetchAgentsUseCaseResponseDTO } from "../../dto/agent/fetch-agents.dto"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"

export class FetchAgentsUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute(): Promise<IFetchAgentsUseCaseResponseDTO> {
    const agents = await this.agentRepository.fetchMany()

    return {
      agents: agents.map((agent) => agent.toJSON()),
    }
  }
}
