import { AddTerminalRequestDTO } from "../dto/add-terminal.dto";
import { Terminal } from "@/domain/terminal/enterprise/entities/terminal.entity";
import { ITerminalRepository } from "../interfaces/terminal-repository.interface";

export class AddTerminalUseCase {
    constructor(private terminalRepository:ITerminalRepository){}

    async execute({ id_terminal, serial, sim_card,agent_id  }:AddTerminalRequestDTO):Promise<void>{

        const terminal = Terminal.create({
            agent_id,
            id_terminal,
            serial,
            sim_card
        })
         await this.terminalRepository.create(terminal)
    }
}