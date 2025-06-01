import { PaginationParams } from "@/core/types/params"
import { IFetchAgentsUseCaseResponseDTO } from "../../dto/agent/fetch-agents.dto"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"

export class FetchAgentsUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute({
    page,
    limit,
  }: PaginationParams): Promise<IFetchAgentsUseCaseResponseDTO> {
    if (!limit) {
      const agents = await this.agentRepository.fetchMany({ page, limit })
      return {
        agents: agents.map((a) => a.toJSON()),
        total: agents.length,
        totalPages: 1,
      }
    }

    const offset = page && page > 0 ? (page - 1) * limit : 0

    const [agents, total] = await Promise.all([
      this.agentRepository.fetchMany({ page: offset, limit }),
      this.agentRepository.countAll(),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      agents: agents.map((agent) => agent.toJSON()),
      total,
      totalPages,
    }
  }
}
