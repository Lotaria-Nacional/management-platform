import { PaginationParams } from "@/core/types/params"
import { TerminalProps } from "../../enterprise/entities/terminal.entity"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"

export type TerminalExtraFilters = {
  province_id?: string
  city_id?: string
  area_id?: string
  zone_id?: string
  type_id?: string
}

export class FetchManyTerminalsUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute(
    params: PaginationParams & TerminalExtraFilters
  ): Promise<TPaginatedDataResponseDTO<TerminalProps>> {
    const { page = 1, limit, ...filters } = params
    const isPaginated = typeof limit === "number" && limit > 0

    if (!isPaginated) {
      const terminals = await this.repository.fetchMany({ ...filters })
      return {
        data: terminals.map((a) => a.toJSON()),
        total: terminals.length,
        totalPages: 1,
      }
    }

    const offset = (page - 1) * limit

    const [terminals, total] = await Promise.all([
      this.repository.fetchMany({ page: offset, limit, ...filters }),
      this.repository.countAll({ ...filters }),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: terminals.map((t) => t.toJSON()),
      total,
      totalPages,
    }
  }
}
