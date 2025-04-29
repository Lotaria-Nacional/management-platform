import { Terminal } from "../../enterprise/entities/terminal.entity";

export interface UploadTerminalsUseCaseRequestDto {
    buffer:Buffer
}

export interface UploadTerminalsUseCaseResponseDto {terminals:Terminal[]}