import { PaginationParams } from "@/core/types/params"
import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"

export class FetchManyAgentsUseCase {
  constructor(private repository: IAgentRepository) {}

  async execute({
    page,
    limit,
    zone_id,
    area_id,
  }: PaginationParams & {area_id?:string, zone_id?:string}): Promise<TPaginatedDataResponseDTO<AgentProps>> {
    if (!limit) {
      const agents = await this.repository.fetchMany({ page, limit, area_id, zone_id })
      return {
        data: agents.map((a) => a.toJSON()),
        total: agents.length,
        totalPages: 1,
      }
    }

    const offset = page && page > 0 ? (page - 1) * limit : 0

    const [agents, total] = await Promise.all([
      this.repository.fetchMany({ page: offset, limit, zone_id, area_id, }),
      this.repository.countAll(),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: agents.map((agent) => agent.toJSON()),
      total,
      totalPages,
    }
  }
}
