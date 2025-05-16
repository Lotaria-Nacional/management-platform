import { Terminal } from "../../enterprise/entities/terminal.entity";

export interface IGetTerminalByIdRequestDTO {
    id:string
}

export interface IGetTerminalByIdResponseDTO {
    terminal:Terminal | null
} 