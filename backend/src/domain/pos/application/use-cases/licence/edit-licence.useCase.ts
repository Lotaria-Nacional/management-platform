import { NotFoundError } from "@/core/errors/not-found-error"
import { TEditLicenceDTO } from "../../validations/licence/edit-licence-schema"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class EditLicenceUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute({id, ...updates}: TEditLicenceDTO) {
    const licence = await this.repository.getById(id)
    
    if (!licence) {
      throw new NotFoundError("A licença solicitada não existe.")
    }
    
    licence.update(updates)

    licence.checkLicenceStatus()

    await this.repository.save(licence)
  }
}
