import { PaginationParams } from "@/core/types/params"
import { FetchTerminalsUseCaseResponseDto } from "../dto/fetch-terminals.dto"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class FetchTerminalsUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute({ limit, page }:PaginationParams): Promise<FetchTerminalsUseCaseResponseDto> {
    if(!limit ||   !page){
      const terminals= await this.terminalRepository.fetchMany()

      return {
        terminals: terminals.map(a => a.toJSON()),
        total: terminals.length,
        totalPages: 1,
      };
    }

    const skip = (page - 1) * limit

    const [terminals, total] = await Promise.all([
      this.terminalRepository.fetchMany({page:skip, limit}),
      this.terminalRepository.countAll(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return { terminals, total, totalPages }
  }

}
