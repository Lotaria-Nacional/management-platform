import { PaginationParams } from "@/core/types/params";
import {  IFetchAgentsUseCaseResponseDTO } from "../../dto/agent/fetch-agents.dto"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"

export class FetchAgentsUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute({ page, limit}: PaginationParams): Promise<IFetchAgentsUseCaseResponseDTO> {
    if (!page || !limit) {
      const agents = await this.agentRepository.fetchMany()
      return {
        agents: agents.map(a => a.toJSON()),
        total: agents.length,
        totalPages: 1,
      };
    }

    const skip = (page - 1) * limit;  
    const [agents, total] = await Promise.all([
      this.agentRepository.fetchMany({page:skip, limit}),
      this.agentRepository.countAll(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      agents: agents.map((agent) => agent.toJSON()),
      total,
      totalPages
    };
  }
}