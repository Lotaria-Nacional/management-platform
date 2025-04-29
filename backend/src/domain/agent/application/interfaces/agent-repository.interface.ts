import { Agent } from "../../enterprise/entities/agent.entity";

export interface IAgentRepository {
    saveMany(agents:Agent[]):Promise<void>
}