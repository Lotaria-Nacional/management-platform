import { ICityRepository } from "../../interfaces/city-repository.interface"

export class FetchManyCityUseCase {
  constructor(private repository: ICityRepository) {}

  async execute() {
    const cities = await this.repository.fetchMany()

    return { cities }
  }
}
