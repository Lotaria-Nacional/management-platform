import { NotFoundError } from "@/core/errors/not-found-error"
import { TEditTerminalDTO } from "../validations/edit-terminal-schema"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class EditTerminalUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute({ id, ...updates }: TEditTerminalDTO) {
    const terminal = await this.repository.getById(id)
    
    if (!terminal) throw new NotFoundError("Terminal não encontrado")

    terminal.update(updates)

    await this.repository.save(terminal)
  }
}
