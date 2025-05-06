import { Agent } from "../../enterprise/entities/agent.entity";

export interface IAgentRepository {
    save(agent:Agent):Promise<void>
    saveMany(agents:Agent[]):Promise<void>
    fetchMany():Promise<Agent[]>
}