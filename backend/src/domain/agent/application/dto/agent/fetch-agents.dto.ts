import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity";

export interface IFetchAgentsUseCaseRequestDTO {
  page?: number;
  limit?: number;
}

export interface IFetchAgentsUseCaseResponseDTO {
  agents: Array<{ id: string } & AgentProps>
  total: number
  totalPages: number
}
