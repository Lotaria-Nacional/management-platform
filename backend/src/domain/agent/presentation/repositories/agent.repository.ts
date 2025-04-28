import { Agent } from "@/agent/enterprise/entities/agent.entity";

export interface IAgentRepository {
    saveMany(agents:Agent[]):Promise<void>
}