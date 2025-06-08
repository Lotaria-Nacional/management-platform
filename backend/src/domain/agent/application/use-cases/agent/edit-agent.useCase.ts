import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { TEditAgentDTO } from "../../validations/agent/edit-agent-schema"

export class EditAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute({ id, ...data }: TEditAgentDTO) {
    const agent = await this.agentRepository.findById(id)

    if (!agent) {
      throw new Error("Agente não encontrado")
    }

    if (data.first_name) agent.first_name = data.first_name
    if (data.last_name) agent.last_name = data.last_name
    if (data.phone) agent.phone = data.phone
    if (data.status) agent.status = data.status
    if (data.agent_id) agent.agent_id = data.agent_id
    if (data.afrimoney !== undefined) agent.afrimoney = data.afrimoney
    if (data.pos_id) {
      agent.props.pos_id = data.pos_id
    }

    await this.agentRepository.save(agent)
  }
}
