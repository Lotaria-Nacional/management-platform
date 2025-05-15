import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface"

export class InMemoryAgentsRepository implements IAgentRepository {
    public items:Agent[] = []

    async create(agent: Agent) {  
        this.items.push(agent)
    }

    async save(agent: Agent): Promise<void> {
        const agentIndex = this.items.findIndex(item => item.id === agent.id);
        this.items[agentIndex] = agent
    }

    async saveMany(agents: Agent[]) {
        this.items.push(...agents)
    }

    async fetchMany() {
        return this.items       
    }

   async findById(id: string) {
        const agent = this.items.find(item => item.id === id)
        
        if(!agent) return null

        return agent
    }
    
    async findByAgentId(agent_id: string) {
        const agent = this.items.find(item => item.agent_id === agent_id)
        
        if(!agent) return null
    
        return agent
        
    }

    async getLast() {
        const lastIndex = this.items.length - 1
        return this.items[lastIndex]
    }
}