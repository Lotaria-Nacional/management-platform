import { IAddPosRequestDTO } from "../dto/add-pos.dto"
import { Pos } from "@/domain/pos/enterprise/entities/pos.entity"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class AddPosUseCase {
  constructor(private posRepository: IPosRepository) {}

  async execute(data: IAddPosRequestDTO): Promise<void> {
    const {
      agent_id,
      coordinates,
      id_reference,
      administration_id,
      area_id,
      city_id,
      licence_id,
      province_id,
      type_id,
      zone_id,
      subtype_id,
    } = data

    const pos = Pos.create({
      area: { id: area_id },
      city: { id: city_id },
      province: { id: province_id },
      coordinates: coordinates,
      id_reference,
      licence: { id: licence_id },
      type: { id: type_id },
      zone: { id: zone_id },
      administration: administration_id ? { id: administration_id } : undefined,
      agent: { id: agent_id },
      status:false,
      subtype: { id: subtype_id ?? "" },
    })

    pos.changePosStatus()
    await this.posRepository.create(pos)
  }
}
