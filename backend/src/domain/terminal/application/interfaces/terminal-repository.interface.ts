import { PaginationParams } from "@/core/types/params"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"

export interface ITerminalRepository {
  create(terminal: Terminal): Promise<void>
  saveMany(terminals: Terminal[]): Promise<void>
  save(terminals: Terminal): Promise<void>
  fetchMany(params?: PaginationParams): Promise<Terminal[]>
  getById(id: string): Promise<Terminal | null>
  delete(id: string): Promise<void>
  countAll(): Promise<number>
}
