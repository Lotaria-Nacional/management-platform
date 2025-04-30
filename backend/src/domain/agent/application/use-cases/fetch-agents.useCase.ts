import { FetchAgentsUseCaseResponse } from "../dto/fetch-agents.dto";
import { IAgentRepository } from "../interfaces/agent-repository.interface";

export class FetchAgentsUseCase {
    constructor(private agentRepository:IAgentRepository){}

    async execute():Promise<FetchAgentsUseCaseResponse>{
        const agents = await this.agentRepository.fetchMany()

        return { agents }
    }
}