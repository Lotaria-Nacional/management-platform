import { Terminal } from "../../enterprise/entities/terminal.entity";

export interface ITerminalRepository {
    saveMany(terminals:Terminal[]):Promise<void>
    fetchAll():Promise<Terminal[]>
}