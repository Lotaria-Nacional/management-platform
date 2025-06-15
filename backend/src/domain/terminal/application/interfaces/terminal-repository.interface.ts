import { PaginationParams } from "@/core/types/params"
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { TerminalExtraFilters } from "../use-cases/fetch-many-terminals.useCase"

export interface ITerminalRepository {
  create(terminal: Terminal): Promise<void>
  save(terminals: Terminal): Promise<void>
  fetchMany(
    params?: PaginationParams & TerminalExtraFilters
  ): Promise<Terminal[]>
  getById(id: string): Promise<Terminal | null>
  delete(id: string): Promise<void>
  countAll(params?: TerminalExtraFilters): Promise<number>
}
