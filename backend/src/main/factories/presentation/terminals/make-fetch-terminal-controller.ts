import { FetchTerminalsUseCase } from "@/domain/terminal/application/use-cases/fetch-terminal.useCase";
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface";
import { FetchTerminalsController } from "@/domain/terminal/presentation/controllers/fetch-terminal.controller";

export function makeFetchTerminalController(repository:ITerminalRepository){
    const fetchTerminalUseCase = new FetchTerminalsUseCase(repository)
    const fetchTerminalController = new FetchTerminalsController(fetchTerminalUseCase)
    
    return { fetchTerminalController }
}