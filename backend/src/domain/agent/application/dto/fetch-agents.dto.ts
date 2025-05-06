import { Agent } from "../../enterprise/entities/agent.entity";

export interface IFetchAgentsUseCaseRequest { }

export interface IFetchAgentsUseCaseResponse {
  agents: Agent[];
}