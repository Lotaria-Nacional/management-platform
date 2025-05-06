import { Agent } from "../../enterprise/entities/agent.entity";
import { IRegisterAgentRequestDTO } from "../dto/register-agent.dto";
import { IAgentRepository } from "../interfaces/agent-repository.interface";

export class RegisterAgentUseCase {
    constructor(private agentRepository:IAgentRepository){}

    async execute({city ,afrimoney,area,lastname,name,phone_number,province,status,terminal_id,zone,agent_id = "default_id" }:IRegisterAgentRequestDTO){
        
        const agent = Agent.create({
            agent_id,
            area,
            city,
            first_name:name,
            last_name:lastname,
            phone:phone_number,
            province,
            status,
            zone,
            afrimoney
        })

        await this.agentRepository.create(agent)

        return {
            agent
        }
    }
}