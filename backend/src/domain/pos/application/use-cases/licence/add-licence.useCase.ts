import { IAddLicenceDTO } from "../../dto/licence/add-licence.dto"
import { Licence } from "@/domain/pos/enterprise/entities/licence.entity"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class AddLicenceUseCase {
  constructor(private repo: ILicenceRepository) {}

  async execute({ reference_id, administration_id, pos_id }: IAddLicenceDTO) {
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
