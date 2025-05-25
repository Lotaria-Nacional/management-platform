import { ISubtypeRepository } from "../../interfaces/subtype-repository.interface"

export class FetchManySubtypeUseCase {
  constructor(private repository: ISubtypeRepository) {}

  async execute() {
    const subtypes = await this.repository.fetchMany()

    return subtypes
  }
}
