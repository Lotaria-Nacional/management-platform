import { Agent } from "@/agent/enterprise/entities/agent.entity";
import { IAgentRepository } from "@/agent/presentation/repositories/agent.repository";

export class InMemoryAgentsRepository implements IAgentRepository {
    public items:Agent[][] = []

    async saveMany(agents: Agent[]) {
        this.items.push(agents)
    }
}