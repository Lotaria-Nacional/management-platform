import path from "path"
import { readFileSync } from "fs"
import { UploadTerminalsUseCase } from "@/domain/terminal/application/use-cases/upload-terminal.useCase"
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"
import {
  Terminal,
  TerminalProps,
} from "@/domain/terminal/enterprise/entities/terminal.entity"

export function makeTerminals(repository: ITerminalRepository) {
  const terminalXlsxFile = path.resolve("test/assets/terminais.xlsx")
  const terminalBuffer = readFileSync(terminalXlsxFile)

  const useCase = new UploadTerminalsUseCase(repository)

  const res = useCase.execute({ buffer: terminalBuffer })

  return res
}

export function makeTerminal(override?: Partial<TerminalProps>, id?: string) {
  const terminal = Terminal.create(
    {
      agent_id: "agent-id-example",
      id_terminal: "terminal-id-example",
      serial: "serial-number-example",
      sim_card: "sim-card-example",
      agent: null,
      created_at: new Date(),
      ...override,
    },
    id
  )

  return { terminal }
}
