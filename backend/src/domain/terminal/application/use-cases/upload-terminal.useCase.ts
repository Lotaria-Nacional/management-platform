import { parseXlsx } from "@/shared/utils/parse-xlsx";
import { XlsxTerminalMapper } from "../mapper/xlsx-terminal.mapper";
import { ITerminalRepository } from "../interfaces/terminal-repository.interface";
import { UploadTerminalsUseCaseRequestDto, UploadTerminalsUseCaseResponseDto } from "../dto/upload-terminals.dto";

export class UploadTerminalsUseCase {
    constructor(private terminalRepository:ITerminalRepository){}

    async execute({ buffer }:UploadTerminalsUseCaseRequestDto):Promise<UploadTerminalsUseCaseResponseDto>{
 
        const rawData = parseXlsx({ buffer })
        
        const terminals = XlsxTerminalMapper.toTerminals (rawData)

        await this.terminalRepository.saveMany(terminals)


        return { terminals }
    }
}