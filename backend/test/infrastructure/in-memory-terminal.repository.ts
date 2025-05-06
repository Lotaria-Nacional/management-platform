import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity";
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface";

export class InMemoryTerminalRepository implements ITerminalRepository {
    items:Terminal[] = []

    async create(terminal: Terminal): Promise<Terminal> {
        this.items.push(terminal)        
        return terminal
    }

    async saveMany(terminals: Terminal[]) {
        this.items.push(...terminals)
    }

    async fetchAll() {
        return this.items
    }

    async findById(id: string) {
        const terminal = this.items.find(terminal => terminal.id === id)
        if(!terminal){
            return null
        }
        return terminal
    }

    async save(terminal: Terminal): Promise<Terminal> {
        const terminalIndex = this.items.findIndex(item => item.id === terminal.id)
        this.items[terminalIndex] = terminal

        return this.items[terminalIndex]
    }

}