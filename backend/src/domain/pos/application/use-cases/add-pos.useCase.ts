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
      type_id,
      zone_id,
      subtype_id,
      licence_id,
      province_id,
      administration_id,
    } = data

    const id_reference = await generateNextSequence("id_pos_reference_seq")

    const pos = Pos.create({
      area_id,
      city_id,
      province_id,
      latitude,
      longitude,
      type_id,
      zone_id,
      id_reference,
      status: false,
      agent_id: agent_id ? agent_id : undefined,
      subtype_id: subtype_id ? subtype_id : undefined,
      licence_id: licence_id ? licence_id : undefined,
      administration_id: administration_id ? administration_id : undefined,
    })

    pos.checkPosStatus()

  await this.repository.create(pos)
  }
}
