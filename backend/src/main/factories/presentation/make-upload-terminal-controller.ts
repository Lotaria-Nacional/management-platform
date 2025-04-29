import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository";
import { UploadTerminalsUseCase } from "@/domain/terminal/application/use-cases/upload-terminal.useCase";
import { UploadTerminalController } from "@/domain/terminal/presentation/controllers/upload-terminal.controller";

export function makeUploadTerminalController(){
    const inMemoryTerminalRepository =  new InMemoryTerminalRepository()
    const uploadTerminalUseCase = new UploadTerminalsUseCase(inMemoryTerminalRepository)
    const uploadTerminalController = new UploadTerminalController(uploadTerminalUseCase)
    
    return { uploadTerminalController }
}