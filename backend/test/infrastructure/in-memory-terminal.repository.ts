import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity";
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface";

export class InMemoryTerminalRepository implements ITerminalRepository {
    items:Terminal[][] = []

    async saveMany(terminals: Terminal[]) {
        this.items.push(terminals)
    }

}