import { IAdministrationRepository } from "../../interfaces/administration-repository.interface"

export class FetchManyAdministrationUseCase {
  constructor(private repository: IAdministrationRepository) {}

  async execute() {
    const administrations = await this.repository.fetchMany()

    return administrations
  }
}
