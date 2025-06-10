import { TEditAgentDTO } from "../../validations/agent/edit-agent-schema"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"

export class EditAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute({ id, ...data }: TEditAgentDTO) {
    const agent = await this.agentRepository.findById(id)

    if (!agent) {
      throw new Error("Agente não encontrado")
    } 

    agent.update(data)

    await this.agentRepository.save(agent)
  }
}
