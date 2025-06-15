import {
  Agent,
  AgentProps,
} from "@/domain/agent/enterprise/entities/agent.entity"
import { PaginationParams } from "@/core/types/params"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"

export type AgentExtraFilter = {
  area_id?: string
  zone_id?: string
  city_id?: string
  province_id?: string
  status?: string
  type_id?: string
}

export class FetchManyAgentsUseCase {
  constructor(private repository: IAgentRepository) {}

  async execute({
    page = 1,
    limit,
    zone_id,
    area_id,
    city_id,
    province_id,
    status,
    type_id,
  }: PaginationParams & AgentExtraFilter): Promise<
    TPaginatedDataResponseDTO<AgentProps>
  > {
    const isPaginated = typeof limit === "number" && limit > 0

    if (!isPaginated) {
      const agents = await this.repository.fetchMany({
        zone_id,
        area_id,
        city_id,
        province_id,
        status,
        type_id,
      })

      return {
        data: agents.map((a) => a.toJSON()),
        total: agents.length,
        totalPages: 1,
      }
    }

    const offset = (page - 1) * limit

    const [agents, total] = await Promise.all([
      this.repository.fetchMany({
        page: offset,
        limit,
        zone_id,
        area_id,
        city_id,
        province_id,
        status,
        type_id,
      }),
      this.repository.countAll({
        zone_id,
        area_id,
        city_id,
        province_id,
        status,
        type_id,
      }),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: agents.map((agent) => agent.toJSON()),
      total,
      totalPages,
    }
  }
}
