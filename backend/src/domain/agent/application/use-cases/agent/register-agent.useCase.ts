import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { TRegisterAgentDTO } from "../../validations/agent/register-agent-schema"
import { generateNextSequence } from "@/shared/utils/generate-next-sequence"

export class RegisterAgentUseCase {
  constructor(private repository: IAgentRepository) {}

  async execute(data: TRegisterAgentDTO) {
    const agentReferenceId = await generateNextSequence("id_agent_reference")

    const agent = Agent.create({
      ...data,
      agent_id: agentReferenceId.toString(),
      pos_id: data.pos_id,
    })

    await this.repository.create(agent)

    return {
      agent,
    }
  }
}
