import { PaginationParams } from "@/core/types/params"
import { IFetchDataResponse } from "@/core/types/fetch-response"
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"

export class FetchAgentsUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute({
    page,
    limit,
  }: PaginationParams): Promise<IFetchDataResponse<AgentProps>> {
    if (!limit) {
      const agents = await this.agentRepository.fetchMany({ page, limit })
      return {
        data: agents.map((a) => a.toJSON()),
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
      data: agents.map((agent) => agent.toJSON()),
      total,
      totalPages,
    }
  }
}
