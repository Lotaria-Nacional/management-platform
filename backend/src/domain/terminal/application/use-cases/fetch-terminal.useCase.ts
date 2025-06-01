import { PaginationParams } from "@/core/types/params"
import { FetchTerminalsUseCaseResponseDto } from "../dto/fetch-terminals.dto"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class FetchTerminalsUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<FetchTerminalsUseCaseResponseDto> {
    if (!limit) {
      const terminals = await this.terminalRepository.fetchMany({ limit, page })
      return {
        terminals: terminals.map((a) => a.toJSON()),
        total: terminals.length,
        totalPages: 1,
      }
    }

    const offset = page && page > 0 ? (page - 1) * limit : 0

    const [terminals, total] = await Promise.all([
      this.terminalRepository.fetchMany({ page: offset, limit }),
      this.terminalRepository.countAll(),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      terminals: terminals.map((t) => t.toJSON()),
      total,
      totalPages,
    }
  }
}
