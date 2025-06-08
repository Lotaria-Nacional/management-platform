import { TEditPosDTO } from "../validations/edit-pos-schema"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class EditPosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute(request: TEditPosDTO) {
    const {
      id,
      id_reference,
      coordinates,
      type_id,
      subtype_id,
      administration_id,
      licence_id,
      zone_id,
      area_id,
      city_id,
      province_id,
    } = request

    const pos = await this.repository.getById(id)

    if (!pos) {
      throw new Error("POS não encontrado")
    }

    if (id_reference !== undefined) {
      pos.props.id_reference = id_reference
    }
    if (coordinates !== undefined) {
      pos.props.coordinates = coordinates
    }
    if (type_id !== undefined) {
      pos.props.type = { id: type_id }
    }
    if (subtype_id !== undefined) {
      pos.props.subtype = { id: subtype_id }
    }
    if (administration_id !== undefined) {
      pos.props.administration = administration_id
        ? { id: administration_id }
        : undefined
    }
    if (licence_id !== undefined) {
      pos.props.licence = { id: licence_id }
    }
    if (zone_id !== undefined) {
      pos.props.zone = { id: zone_id }
    }
    if (area_id !== undefined) {
      pos.props.area = { id: area_id }
    }
    if (city_id !== undefined) {
      pos.props.city = { id: city_id }
    }
    if (province_id !== undefined) {
      pos.props.province = { id: province_id }
    }

    pos.changePosStatus()

    await this.repository.save(pos)
  }
}
