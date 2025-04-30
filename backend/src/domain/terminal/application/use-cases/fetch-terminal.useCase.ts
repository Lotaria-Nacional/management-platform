import { ITerminalRepository } from "../interfaces/terminal-repository.interface";
import { FetchTerminalsUseCaseResponseDto } from "../dto/fetch-terminals-use-case-request-dto";

export class FetchTerminalsUseCase {
    constructor(private terminalRepository:ITerminalRepository){}

    async execute():Promise<FetchTerminalsUseCaseResponseDto>{
 
        const terminals = await this.terminalRepository.fetchAll()

        return { terminals }
    }
}