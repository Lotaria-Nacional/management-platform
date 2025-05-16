import { Terminal } from "../../enterprise/entities/terminal.entity";

export interface FetchTerminalsUseCaseRequestDto {}

export interface FetchTerminalsUseCaseResponseDto {
    terminals:Terminal[]
}