import { AgentProps } from "@/domain/agent/enterprise/entities/agent.entity";

export interface IFetchAgentsUseCaseRequestDTO {}

export interface IFetchAgentsUseCaseResponseDTO {
  agents: Array<{ id: string } & AgentProps>
}
