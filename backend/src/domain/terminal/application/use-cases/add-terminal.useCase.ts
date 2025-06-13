import { TAddTerminalDTO } from "../validations/add-terminal-schema"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"
import { generateNextSequence } from "@/shared/utils/generate-next-sequence"

export class AddTerminalUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute({
    serial,
    pin,
    puk,
    sim_card,
    agent_id,
  }: TAddTerminalDTO): Promise<void> {
    const id_reference = await generateNextSequence("id_terminal_reference_seq")

    const terminal = Terminal.create({
      serial,
      sim_card,
      agent_id,
      pin: pin ?? undefined,
      puk: puk ?? undefined,
      id_reference,
    })

    await this.repository.create(terminal)
  }
}
