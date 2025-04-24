import { Agent } from "@/domain/file/enterprise/entities/agent.entity";

export interface AgentRepository {
    save: (agent:Agent)=> Promise<void>
}