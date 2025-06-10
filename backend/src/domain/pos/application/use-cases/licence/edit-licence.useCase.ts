import { ILicenceRepository } from "../../interfaces/licence-repository.interface"
import { TEditLicenceDTO } from "../../validations/licence/edit-licence-schema"

export class EditLicenceUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute({
    id,
    pos_id,
    administration_id,
    licence_reference,
  }: TEditLicenceDTO) {
    const licence = await this.repository.getById(id)

    if (!licence) {
      throw new Error("A licença solicitada não existe.")
    }

    if (licence_reference !== undefined) {
      licence.props.licence_reference = licence_reference
    }
    if (administration_id !== undefined) {
      licence.props.administration_id = administration_id
    }
    if (pos_id !== undefined) {
      licence.props.pos_id = pos_id
    }

    licence.checkLicenceStatus()

    await this.repository.save(licence)
  }
}
