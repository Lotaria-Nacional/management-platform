import { TAddPosDTO } from "../validations/add-pos-schema"
import { Pos } from "@/domain/pos/enterprise/entities/pos.entity"
import { IPosRepository } from "../interfaces/pos-repository.interface"
import { generateNextSequence } from "@/shared/utils/generate-next-sequence"

export class AddPosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute(data: TAddPosDTO): Promise<void> {
    const {
      agent_id,
      coordinates,
      administration_id,
      area_id,
      city_id,
      licence_id,
      province_id,
      type_id,
      zone_id,
      subtype_id,
    } = data

    const posReferenceId = await generateNextSequence("id_pos_reference")

    const pos = Pos.create({
      area: { id: area_id },
      city: { id: city_id },
      province: { id: province_id },
      coordinates: coordinates,
      id_reference: posReferenceId,
      licence: { id: licence_id },
      type: { id: type_id },
      zone: { id: zone_id },
      administration: administration_id ? { id: administration_id } : undefined,
      agent: { id: agent_id },
      status: false,
      subtype: { id: subtype_id ?? "" },
    })

    pos.changePosStatus()
    await this.repository.create(pos)
  }
}
