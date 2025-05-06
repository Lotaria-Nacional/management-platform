import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity";

export interface ITerminalRepository {
    create(terminal:Terminal): Promise<Terminal>
    saveMany(terminals:Terminal[]):Promise<void>
    save(terminals:Terminal):Promise<Terminal>
    fetchAll():Promise<Terminal[]>
    findById(id:string):Promise<Terminal | null>
}