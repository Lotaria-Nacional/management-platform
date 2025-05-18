import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"

export interface ITerminalRepository {
  create(terminal: Terminal): Promise<void>
  saveMany(terminals: Terminal[]): Promise<void>
  save(terminals: Terminal): Promise<void>
  fetchMany(): Promise<Terminal[]>
  getById(id: string): Promise<Terminal | null>
  delete(id: string): Promise<void>
}
