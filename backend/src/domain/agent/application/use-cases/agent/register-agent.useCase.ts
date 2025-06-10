import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"
import { generateNextSequence } from "@/shared/utils/generate-next-sequence"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { TRegisterAgentDTO } from "../../validations/agent/register-agent-schema"

export class RegisterAgentUseCase {
  constructor(private repository: IAgentRepository) {}

  async execute(data: TRegisterAgentDTO) {
    
    let agentReferenceId: number

    if(data.type === "LOTARIA-NACIONAL"){
      agentReferenceId = await generateNextSequence("id_ln_agent_reference_seq")
    }else{
      agentReferenceId = await generateNextSequence("id_rev_agent_reference_seq")
    }

    const agent = Agent.create({
      ...data,
      status:"ACTIVO",
      pos_id: data.pos_id,
      id_reference: agentReferenceId,
    })

    await this.repository.create(agent)

    return {
      agent,
    }
  }
}