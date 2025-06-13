import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"
import { generateNextSequence } from "@/shared/utils/generate-next-sequence"
import { AgentStatusEnum } from "@/domain/agent/enterprise/enums/agent-status"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { TRegisterAgentDTO } from "../../validations/agent/register-agent-schema"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"

export class RegisterAgentUseCase {
  constructor(private repository: IAgentRepository, private posRepository: IPosRepository) {}

  async execute(data: TRegisterAgentDTO) {
    
    let id_reference: number

    if(data.agent_type === "LOTARIA-NACIONAL"){
      id_reference = await generateNextSequence("id_ln_agent_reference_seq")
    }else{
      id_reference = await generateNextSequence("id_rev_agent_reference_seq")
    }

    let type_id:string | undefined = undefined 
    let city_id:string | undefined = undefined 
    let area_id:string | undefined = undefined 
    let zone_id:string | undefined = undefined 
    let province_id:string | undefined = undefined 

    if(data.pos_id){
      const pos = await this.posRepository.getById(data.pos_id)
      if(pos){
        type_id = pos.props.type?.id
        province_id = pos.props.province?.id
        city_id = pos.props.city?.id
        area_id = pos.props.area?.id
        zone_id = pos.props.zone?.id
      }
    }

    const agent = Agent.create({
      ...data,
      pos_id: data.pos_id,
      id_reference: id_reference,
      status:AgentStatusEnum.INACTIVE,
      terminal_id: data.terminal_id ?? undefined, 
      type_id,
      province_id,
      city_id,
      area_id,
      zone_id,
    })

    await this.repository.create(agent)

    return {
      agent,
    }
  }
}