import { IEditTerminalRequestDTO } from "../dto/edit-terminal.dto"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class EditTerminalUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute({ id, ...updates }: IEditTerminalRequestDTO) {
    const terminal = await this.terminalRepository.getById(id)
    if (!terminal) throw new Error("Terminal Not Found")

    Object.assign(terminal, updates)

    return {
      terminal: await this.terminalRepository.save(terminal),
    }
  }
}
