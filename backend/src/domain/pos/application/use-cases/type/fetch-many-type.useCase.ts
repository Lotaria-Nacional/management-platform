import { ITypeRepository } from "../../interfaces/type-repository.interface"

export class FetchManyTypeUseCase {
  constructor(private repository: ITypeRepository) {}

  async execute() {
    const types = await this.repository.fetchMany()

    return types
  }
}
