import { ILicenceRepository } from "../../interfaces/licence-repository.interface"
import { TEditLicenceDTO } from "../../validations/licence/edit-licence-schema"

export class EditLicenceUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute({
    id,
    reference_id,
    status,
    administration_id,
    pos_id,
  }: TEditLicenceDTO) {
    const licence = await this.repository.getById(id)

    if (!licence) {
      throw new Error("A licença solicitada não existe.")
    }

    if (reference_id !== undefined) {
      licence.props.reference_id = reference_id
    }
    if (status !== undefined) {
      licence.props.status = status
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
