import { Licence } from "@/domain/pos/enterprise/entities/licence.entity"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class GetLicenceByIdUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute(id: string): Promise<{ licence: Licence }> {
    const licence = await this.repository.getById(id)

    if (!licence) {
      throw new Error("A licença solicitada não existe")
    }

    return { licence }
  }
}
