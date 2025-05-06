import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface";
import { FetchTerminalsUseCase } from "@/domain/terminal/application/use-cases/fetch-terminal.useCase";
import { UploadTerminalsUseCase } from "@/domain/terminal/application/use-cases/upload-terminal.useCase";
import { FetchTerminalsController } from "@/domain/terminal/presentation/controllers/fetch-terminal.controller";
import { UploadTerminalController } from "@/domain/terminal/presentation/controllers/upload-terminal.controller";

export class MakeTerminalController {
    constructor(private repository:ITerminalRepository){}

    uploadTerminal(){
        const useCase = new UploadTerminalsUseCase(this.repository)
        const uploadTerminalController = new UploadTerminalController(useCase)
        
        return { uploadTerminalController }
    }

    fetchTerminal(){
        const useCase = new FetchTerminalsUseCase(this.repository)
        const fetchTerminalController = new FetchTerminalsController(useCase)
        
        return { fetchTerminalController }
    }

}