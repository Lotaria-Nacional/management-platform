import { NotFoundError } from "@/core/errors/not-found-error"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { Agent, AgentProps } from "@/domain/agent/enterprise/entities/agent.entity"

export class GetAgentByIdUseCase {
  constructor(private repository: IAgentRepository) {}

  async execute(id: string): Promise<{agent: Agent}> {
    
    const agent = await this.repository.getById(id)

    if(!agent){
      throw new NotFoundError()
    }

    return {
      agent
    }
  }
}
