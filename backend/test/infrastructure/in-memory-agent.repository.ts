import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"

export class InMemoryAgentsRepository implements IAgentRepository {
    public items:Agent[] = []

    async save(agent: Agent) {  
        this.items.push(agent)
    }

    async saveMany(agents: Agent[]) {
        this.items.push(...agents)
    }

    async fetchMany() {
        return this.items       
    }
}