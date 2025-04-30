import { Agent } from "../../enterprise/entities/agent.entity";

export interface FetchAgentsUseCaseRequest { }

export interface FetchAgentsUseCaseResponse {
  agents: Agent[];
}