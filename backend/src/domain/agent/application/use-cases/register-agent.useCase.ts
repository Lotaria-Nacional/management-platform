import { Agent } from "../../enterprise/entities/agent.entity"
import { IRegisterAgentRequestDTO } from "../dto/register-agent.dto"
import { IAgentRepository } from "../interfaces/agent-repository.interface"

export class RegisterAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute(data: IRegisterAgentRequestDTO) {
    const lastExistingAgent = await this.agentRepository.getLast()
    const newAgentId = lastExistingAgent ? String(Number(lastExistingAgent.agent_id) + 1) : "1"
    
    const agent = Agent.create({
      ...data,
      agent_id: newAgentId,
      terminal: data.terminal_id ?? null,
    })

    await this.agentRepository.create(agent)

    return {
      agent,
    }
  }
}
