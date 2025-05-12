import { Agent, AgentProps } from "../../enterprise/entities/agent.entity"

export interface IFetchAgentsUseCaseRequest {}

export interface IFetchAgentsUseCaseResponse {
  agents: Array<{ id: string } & AgentProps>
}
