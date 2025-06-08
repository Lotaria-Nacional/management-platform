import { ITerminalRepository } from "../interfaces/terminal-repository.interface"
import { TEditTerminalDTO } from "../validations/edit-terminal-schema"

export class EditTerminalUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute({ id, ...updates }: TEditTerminalDTO) {
    const terminal = await this.repository.getById(id)

    if (!terminal) throw new Error("Terminal Not Found")

    Object.assign(terminal, updates)
  }
}
