import { IEditTerminalRequestDTO } from "../dto/edit-terminal.dto"
import { ITerminalRepository } from "../interfaces/terminal-repository.interface"

export class EditTerminalUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute({ id, ...updates }: IEditTerminalRequestDTO) {
    const terminal = await this.terminalRepository.getById(id)

    if (!terminal) {
      throw new Error("Terminal Not Found")
    }

    const fieldMap: Record<string, keyof typeof terminal> = {
      id_terminal: "id_terminal",
      serial: "serial",
      sim_card: "sim_card",
      agent_id: "agent_id",
    }

    for (const [key, value] of Object.entries(updates) as [
      keyof typeof updates,
      any
    ][]) {
      if (value !== undefined) {
        const terminalProp = fieldMap[key]
        const targetProp = terminalProp ?? key
        ;(terminal as any)[targetProp] = value
      }
    }

    const editedTerminal = await this.terminalRepository.save(terminal)

    return {
      terminal: editedTerminal,
    }
  }
}
