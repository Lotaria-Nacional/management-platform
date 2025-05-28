import { TerminalProps } from "../../enterprise/entities/terminal.entity";

export interface FetchTerminalsUseCaseRequestDto {}

export interface FetchTerminalsUseCaseResponseDto {
    terminals:{ id:string } & TerminalProps[]
      total: number
      totalPages: number
}