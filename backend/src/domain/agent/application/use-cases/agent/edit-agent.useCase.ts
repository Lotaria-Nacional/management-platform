import { TEditAgentDTO } from "../../validations/agent/edit-agent-schema"
import { IAgentRepository } from "../../interfaces/agent-repository.interface"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"
import { NotFoundError } from "@/core/errors/not-found-error"
export class EditAgentUseCase {
  constructor(
    private agentRepository: IAgentRepository,
    private posRepository: IPosRepository
  ) {}

  async execute({ id, ...data }: TEditAgentDTO) {
    const agent = await this.agentRepository.getById(id)

    if (!agent) {
      throw new NotFoundError("Agente não encontrado")
    }

    // Derivar dados do POS
    let type_id = agent.props.type_id
    let city_id = agent.props.city_id
    let area_id = agent.props.area_id
    let zone_id = agent.props.zone_id
    let province_id = agent.props.province_id

    if (data.pos_id) {
      const pos = await this.posRepository.getById(data.pos_id)
      if (pos) {
        type_id = pos.props.type?.id
        province_id = pos.props.province?.id
        city_id = pos.props.city?.id
        area_id = pos.props.area?.id
        zone_id = pos.props.zone?.id
      }
      console.log("POS ENTITY: " + pos?.toJSON())
    }

    agent.update({
      ...data,
      type_id,
      province_id,
      city_id,
      area_id,
      zone_id,
    })
    console.log("AGENT ENTITY: " + agent.toJSON())

    await this.agentRepository.save(agent)
  }
}
