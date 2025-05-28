import { ITerminalRepository } from "../interfaces/terminal-repository.interface"
import { FetchTerminalsUseCaseResponseDto } from "../dto/fetch-terminals.dto"
import { PaginationParams } from "@/core/types/params"

export class FetchTerminalsUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute({ limit, page }:PaginationParams): Promise<FetchTerminalsUseCaseResponseDto> {
    if(!limit && !page){
      const terminals= await this.terminalRepository.fetchMany()

      return {
        total,
        terminals,
        totalPages
      } 

    }

    const terminals = await this.terminalRepository.fetchMany()
    return { terminals }
  }

}
