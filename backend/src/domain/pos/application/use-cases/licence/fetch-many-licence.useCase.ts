import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class FetchManyLicenceUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute() {
    const licences = await this.repository.fetchMany()

    return licences
  }
}
