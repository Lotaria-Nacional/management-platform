import { Licence } from "@/domain/pos/enterprise/entities/licence.entity"
import { TAddLicenceDTO } from "../../validations/licence/add-licence-schema"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"
import { LicenceStatus, LicenceStatusEnum } from "@/domain/pos/enterprise/enums/licence.enums"

export class AddLicenceUseCase {
  constructor(private repo: ILicenceRepository) {}

  async execute({ licence_reference, administration_id, pos_id }: TAddLicenceDTO) {
    const licence = Licence.create({
      licence_reference,
      status: LicenceStatusEnum.NOT_USED,
      administration_id,
      pos_id,
    })

    licence.checkLicenceStatus()

    await this.repo.create(licence)
  }
}
