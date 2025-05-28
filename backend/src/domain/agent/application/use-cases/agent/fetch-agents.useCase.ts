import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { IFetchAgentsUseCaseResponseDTO } from "../../dto/agent/fetch-agents.dto"
import { PaginationParams } from "@/core/types/params";

export class FetchAgentsUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute({ skip, take }: PaginationParams): Promise<IFetchAgentsUseCaseResponseDTO> {
    if (!skip || !take) {
      const agents = await this.agentRepository.fetchMany()
      return {
        agents: agents.map(a => a.toJSON()),
        total: agents.length,
        totalPages: 1,
      };
    }

    const toSkip = (skip - 1) * take;

    const [agents, total] = await Promise.all([
      this.agentRepository.fetchMany({skip:toSkip, take}),
      this.agentRepository.countAll(),
    ]);

    const totalPages = Math.ceil(total / take);

    return {
      agents: agents.map((agent) => agent.toJSON()),
      total,
      totalPages
    };
  }
}