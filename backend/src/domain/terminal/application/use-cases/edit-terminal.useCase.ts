import { TEditTerminalDTO } from "../validations/edit-terminal-schema"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class EditTerminalUseCase {
  constructor(private repository: ITerminalRepository) {}

  async execute({ id, agent_id, serial, sim_card }: TEditTerminalDTO) {
    const terminal = await this.repository.getById(id)

    if (!terminal) throw new Error("Terminal Not Found")

    if(agent_id !== undefined) terminal.agent_id = agent_id
    if(serial !== undefined) terminal.serial = serial
    if(sim_card !== undefined) terminal.sim_card = sim_card

    await this.repository.save(terminal)
  }
}
