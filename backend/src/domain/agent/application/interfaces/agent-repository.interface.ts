import { PaginationParams } from "@/core/types/params"
import { Agent } from "../../enterprise/entities/agent.entity"
import { AgentExtraFilter } from "../use-cases/agent/fetch-many-agents.useCase"

export interface IAgentRepository {
  create(agent: Agent, tx?: unknown): Promise<void>
  save(agent: Agent, tx?: unknown): Promise<void>
  fetchMany(params?: PaginationParams & AgentExtraFilter): Promise<Agent[]>
  getById(id: string, tx?: unknown): Promise<Agent | null>
  countAll(params?: AgentExtraFilter): Promise<number>
}
