import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface";
import { AddTerminalUseCase } from "@/domain/terminal/application/use-cases/add-terminal.useCase";
import { EditTerminalUseCase } from "@/domain/terminal/application/use-cases/edit-terminal.useCase";
import { FetchTerminalsUseCase } from "@/domain/terminal/application/use-cases/fetch-terminal.useCase";
import { UploadTerminalsUseCase } from "@/domain/terminal/application/use-cases/upload-terminal.useCase";
import { AddTerminalController } from "@/domain/terminal/presentation/controllers/add-terminal.controller";
import { EditTerminalController } from "@/domain/terminal/presentation/controllers/edit-terminal.controller";
import { FetchTerminalsController } from "@/domain/terminal/presentation/controllers/fetch-terminal.controller";
import { UploadTerminalController } from "@/domain/terminal/presentation/controllers/upload-terminal.controller";

export class MakeTerminalController {
    constructor(private repository:ITerminalRepository){}

    addTerminal(){
        const useCase = new AddTerminalUseCase(this.repository)
        const addTerminalController = new AddTerminalController(useCase)
        
        return { addTerminalController }
    }

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
    
    editTermial(){
        const useCase = new EditTerminalUseCase(this.repository)
        const editTerminalController = new EditTerminalController(useCase)
        
        return { editTerminalController }
    }

}