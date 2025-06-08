import { PaginationParams } from "@/core/types/params"
import { TerminalProps } from "../../enterprise/entities/terminal.entity"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"

export class FetchManyTerminalsUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<TPaginatedDataResponseDTO<TerminalProps>> {
    if (!limit) {
      const terminals = await this.repository.fetchMany({ limit, page })
      return {
        data: terminals.map((a) => a.toJSON()),
        total: terminals.length,
        totalPages: 1,
      }
    }

    const offset = page && page > 0 ? (page - 1) * limit : 0

    const [terminals, total] = await Promise.all([
      this.repository.fetchMany({ page: offset, limit }),
      this.repository.countAll(),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: terminals.map((t) => t.toJSON()),
      total,
      totalPages,
    }
  }
}
