import { IEditPosRequestDTO } from "../dto/edit-pos.dto";
import { IPosRepository } from "../interfaces/pos-repository.interface";

export class EditPosUseCase {
  constructor(private posRepository: IPosRepository) {}

  async execute(request: IEditPosRequestDTO): Promise<void> {
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
    } = request;

    const pos = await this.posRepository.getById(id);
    if (!pos) {
      throw new Error("POS não encontrado");
    }

    if (id_reference !== undefined) {
      pos.idReference = id_reference;
    }
    if (coordinates !== undefined) {
      pos.coordinates = coordinates;
    }
    if (type_id !== undefined) {
      pos.typeId = type_id;
    }
    if (subtype_id !== undefined) {
      pos.subtypeId = subtype_id;
    }
    if (administration_id !== undefined) {
      pos.administrationId = administration_id;
    }
    if (licence_id !== undefined) {
      pos.licenceId = licence_id;
    }
    if (zone_id !== undefined) {
      pos.zoneId = zone_id;
    }
    if (area_id !== undefined) {
      pos.areaId = area_id;
    }
    if (city_id !== undefined) {
      pos.cityId = city_id;
    }
    if (province_id !== undefined) {
      pos.provinceId = province_id;
    }

    // 3️⃣ Persiste as alterações
    await this.posRepository.save(pos);
  }
}
