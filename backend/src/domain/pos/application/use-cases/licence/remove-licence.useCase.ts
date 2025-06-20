import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class RemoveLicenceUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute(id: string) {
    const licence = await this.repository.getById(id)

    if (!licence) {
      throw new Error("A licença solicitada não existe.")
    }

    await this.repository.delete(licence.id)
  }
}
