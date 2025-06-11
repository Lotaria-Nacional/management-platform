import { NotFoundError } from "@/core/errors/not-found-error"
import { Terminal } from "../../enterprise/entities/terminal.entity"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class GetTerminalByIdUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute(id: string): Promise<{ terminal: Terminal }> {
    const terminal = await this.repository.getById(id)

    if (!terminal) throw new NotFoundError("Terminal não encontrado")

    return { terminal }
  }
}
