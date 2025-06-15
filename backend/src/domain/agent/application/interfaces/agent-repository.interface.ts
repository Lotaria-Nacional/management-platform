import { PaginationParams } from "@/core/types/params"
import { Agent } from "../../enterprise/entities/agent.entity"
import { AgentExtraFilter } from "../use-cases/agent/fetch-many-agents.useCase"

export interface IAgentRepository {
  create(agent: Agent): Promise<void>
  save(agent: Agent): Promise<void>
  fetchMany(params?: PaginationParams & AgentExtraFilter): Promise<Agent[]>
  getById(id: string): Promise<Agent | null>
  countAll(params?: AgentExtraFilter): Promise<number>
}
