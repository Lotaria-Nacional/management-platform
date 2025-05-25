import { IAreaRepository } from "../../interfaces/area-repository.interface"

export class FetchManyAreaUseCase {
  constructor(private repository: IAreaRepository) {}

  async execute() {
    const areas = await this.repository.fetchMany()

    return areas
  }
}
