import { IEditPosRequestDTO, IEditPosResponseDTO } from "../dto/edit-pos.dto"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class EditPosUseCase {
  constructor(private posRepository: IPosRepository) {}

  async execute(request: IEditPosRequestDTO): Promise<IEditPosResponseDTO> {
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

    // 1️⃣ Busca o POS existente
    const pos = await this.posRepository.getById(id)
    if (!pos) {
      throw new Error("POS não encontrado")
    }
    // 2️⃣ Atualiza apenas os campos que vieram no DTO
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

    // 3️⃣ Persiste as alterações
    await this.posRepository.save(pos)

    // 4️⃣ Retorno vazio, mas você pode preencher conforme necessidade
    return {}
  }
}
