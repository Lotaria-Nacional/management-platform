import { NotFoundError } from "@/core/errors/not-found-error"
import { Licence } from "@/domain/pos/enterprise/entities/licence.entity"
import { TAddLicenceDTO } from "../../validations/licence/add-licence-schema"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"
import { LicenceStatus, LicenceStatusEnum } from "@/domain/pos/enterprise/enums/licence.enums"
import { IAdministrationRepository } from "../../interfaces/administration-repository.interface"

export class AddLicenceUseCase {
  constructor(private repo: ILicenceRepository, private adminRepo:IAdministrationRepository) {}

  async execute({ creation_date,description,licence_number, administration_id, pos_id }: TAddLicenceDTO) {
    const admin = await this.adminRepo.getById(administration_id)

    if(!admin) throw new NotFoundError("A administração solicitada não existe")

    const licence = Licence.create({
      admin:{name: admin.name},
      status: LicenceStatusEnum.NOT_USED,
      administration_id,
      pos_id,
      creation_date,description,
      licence_number
    })

    licence.checkLicenceStatus()

    await this.repo.create(licence)
  }
}