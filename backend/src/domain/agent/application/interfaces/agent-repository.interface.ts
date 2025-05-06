import { Agent } from "../../enterprise/entities/agent.entity";

export interface IAgentRepository {
    create(agent:Agent):Promise<void>
    save(agent:Agent):Promise<Agent>
    saveMany(agents:Agent[]):Promise<void>
    fetchMany():Promise<Agent[]>
    findById(id:string):Promise<Agent | null>
}