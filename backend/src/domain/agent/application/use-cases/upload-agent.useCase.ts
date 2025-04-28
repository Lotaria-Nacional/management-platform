import { Agent } from "@/domain/agent/enterprise/entities/agent.entity";
import { IAgentRepository } from "@/domain/agent/presentation/repositories/agent.repository";

interface UploadAgentUseCaseRequest {
    agents:{
        agent_id: string;
        first_name: string;
        last_name: string;
        phone: string;
        afrimoney?: string | null;
        status: string;
        zone: string;
        area: string;
        city: string;
        province: string;
    }[]
}

export class UploadAgentUseCase {
    constructor(private agentRepository:IAgentRepository){}

    async execute(data:UploadAgentUseCaseRequest):Promise<void>{
        const agents = data.agents.map((agent)=>{
            return Agent.create(agent)
        })

        console.log(agents)
    }
}