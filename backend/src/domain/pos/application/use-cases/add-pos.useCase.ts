import { TAddPosDTO } from "../validations/add-pos-schema"
import { Pos } from "@/domain/pos/enterprise/entities/pos.entity"
import { IPosRepository } from "../interfaces/pos-repository.interface"
import { generateNextSequence } from "@/shared/utils/generate-next-sequence"

export class AddPosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute(data: TAddPosDTO): Promise<void> {
    const {
      agent_id,
      latitude,
      longitude,
      area_id,
      city_id,
      licence_id,
      province_id,
      type_id,
      zone_id,
      subtype_id,
      administration_id
    } = data

    const id_reference = await generateNextSequence("id_pos_reference")

    const pos = Pos.create({
      area: { id: area_id },
      city: { id: city_id },
      province: { id: province_id },
      latitude,
      longitude,
      id_reference,
      status: false,
      type: { id: type_id },
      zone: { id: zone_id },
      agent: { id: agent_id },
      subtype: subtype_id ? { id: subtype_id } : undefined,
      licence: licence_id ? { id: licence_id } : undefined,
      administration: administration_id ? { id: administration_id } : undefined,
    })

    pos.checkPosStatus()

    await this.repository.create(pos)
  }
}
