import { TAddTerminalDTO } from "../validations/add-terminal-schema"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class AddTerminalUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute({
    id_terminal,
    serial,
    sim_card,
    agent_id,
  }: TAddTerminalDTO): Promise<void> {
    const terminal = Terminal.create({
      agent_id,
      id_terminal,
      serial,
      sim_card,
    })

    await this.repository.create(terminal)
  }
}
