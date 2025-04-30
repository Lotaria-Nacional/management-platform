import path from "path"
import { readFileSync } from "fs"
import { UploadTerminalsUseCase } from "@/domain/terminal/application/use-cases/upload-terminal.useCase"
import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"

export function makeTerminals(repository:ITerminalRepository){

    const terminalXlsxFile = path.resolve("test/assets/terminais.xlsx")
    const terminalBuffer = readFileSync(terminalXlsxFile)

    const useCase = new UploadTerminalsUseCase(repository)
    
    const res = useCase.execute({ buffer:terminalBuffer })
    
    return res
}