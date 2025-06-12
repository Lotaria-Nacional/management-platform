import { PaginationParams } from "@/core/types/params"
import { Agent } from "../../enterprise/entities/agent.entity"

export interface IAgentRepository {
  create(agent: Agent): Promise<void>
  save(agent: Agent): Promise<void>
  fetchMany(params?: PaginationParams & {zone_id?:string, area_id?:string}): Promise<Agent[]>
  getById(id: string): Promise<Agent | null>
  countAll(): Promise<number>
}
