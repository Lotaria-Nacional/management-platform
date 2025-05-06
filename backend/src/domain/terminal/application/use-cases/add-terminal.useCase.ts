import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity";
import { ITerminalRepository } from "../interfaces/terminal-repository.interface";
import { AddTerminalRequestDto, AddTerminalResponseDto } from "../dto/add-terminal-request.dto";

export class AddTerminalUseCase {
    constructor(private terminalRepository:ITerminalRepository){}

    async execute({ id_terminal, serial, sim_card }:AddTerminalRequestDto):Promise<AddTerminalResponseDto>{
 
        const terminal = Terminal.create({
            id_terminal,
            serial,
            sim_card
        })

        const terminalSaved = await this.terminalRepository.create(terminal)

        return { 
            terminalSaved
         }
    }
}