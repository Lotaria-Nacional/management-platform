import { UploadTerminalsUseCase } from "@/domain/terminal/application/use-cases/upload-terminal.useCase";
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface";
import { UploadTerminalController } from "@/domain/terminal/presentation/controllers/upload-terminal.controller";

export function makeUploadTerminalController(repository:ITerminalRepository){
    const uploadTerminalUseCase = new UploadTerminalsUseCase(repository)
    const uploadTerminalController = new UploadTerminalController(uploadTerminalUseCase)
    
    return { uploadTerminalController }
}