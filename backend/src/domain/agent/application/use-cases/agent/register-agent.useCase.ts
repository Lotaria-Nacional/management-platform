import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { TRegisterAgentDTO } from "../../validations/agent/register-agent-schema"

export class RegisterAgentUseCase {
  constructor(private repository: IAgentRepository) {}

  async execute(data: TRegisterAgentDTO) {
    const lastExistingAgent = await this.repository.getLast()

    const newAgentId = lastExistingAgent
      ? String(Number(lastExistingAgent.agent_id) + 1)
      : "1"

    const agent = Agent.create({
      ...data,
      agent_id: newAgentId,
      pos_id: data.pos_id,
    })

    await this.repository.create(agent)

    return {
      agent,
    }
  }
}
