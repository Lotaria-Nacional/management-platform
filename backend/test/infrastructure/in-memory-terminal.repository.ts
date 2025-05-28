import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity"
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"

export class InMemoryTerminalRepository implements ITerminalRepository {
  items: Terminal[] = []

  async create(terminal: Terminal) {
    this.items.push(terminal)
  }

  async saveMany(terminals: Terminal[]) {
    this.items.push(...terminals)
  }

  async fetchMany() {
    return this.items
  }

  async getById(id: string) {
    const terminal = this.items.find((terminal) => terminal.id === id)
    if (!terminal) {
      return null
    }
    return terminal
  }

  async save(terminal: Terminal) {
    const terminalIndex = this.items.findIndex(
      (item) => item.id === terminal.id
    )
    this.items[terminalIndex] = terminal
  }

  async delete(id: string): Promise<void> {
    const index = this.items.findIndex((item) => item.id === id)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  }
}
