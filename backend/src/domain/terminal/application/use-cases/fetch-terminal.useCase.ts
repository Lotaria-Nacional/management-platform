import { ITerminalRepository } from "../interfaces/terminal-repository.interface"
import { FetchTerminalsUseCaseResponseDto } from "../dto/fetch-terminals.dto"

export class FetchTerminalsUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute(): Promise<FetchTerminalsUseCaseResponseDto> {
    const terminals = await this.terminalRepository.fetchMany()

    return { terminals }
  }
}
