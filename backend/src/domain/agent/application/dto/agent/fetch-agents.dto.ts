import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity";

export interface IFetchAgentsUseCaseRequestDTO {
  page?: number;
  limit?: number;
}

export interface IFetchAgentsUseCaseResponseDTO<T> {
  datats: Array<{ id: string } & T>
  total: number
  totalPages: number
}
