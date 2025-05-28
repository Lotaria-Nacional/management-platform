import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { IRegisterAgentRequestDTO } from "../../dto/agent/register-agent.dto"

export class RegisterAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute(data: IRegisterAgentRequestDTO) {
    const lastExistingAgent = await this.agentRepository.getLast()
    const newAgentId = lastExistingAgent
      ? String(Number(lastExistingAgent.agent_id) + 1)
      : "1"

    const agent = Agent.create({
      ...data,
      agent_id: newAgentId,
    })

    await this.agentRepository.create(agent)

    return {
      agent,
    }
  }
}
