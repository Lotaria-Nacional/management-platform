import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class RemoveTerminalUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute(id: string): Promise<void> {
    const terminal = await this.terminalRepository.getById(id)

    if (!terminal) {
      throw new Error("Terminal not found.")
    }

    await this.terminalRepository.delete(id)
  }
}
