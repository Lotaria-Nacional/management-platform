import { Licence } from "@/domain/pos/enterprise/entities/licence.entity"
import { TAddLicenceDTO } from "../../validations/licence/add-licence-schema"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class AddLicenceUseCase {
  constructor(private repo: ILicenceRepository) {}

  async execute({ reference_id, administration_id, pos_id }: TAddLicenceDTO) {
    const licence = Licence.create({
      reference_id,
      status: false,
      administration_id,
      pos_id,
    })

    licence.checkLicenceStatus()

    await this.repo.create(licence)
  }
}
