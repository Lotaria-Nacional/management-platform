import { IProvinceRepository } from "../../interfaces/province-repository.interface"

export class FetchManyProvinceUseCase {
  constructor(private repository: IProvinceRepository) {}

  async execute() {
    const provinces = await this.repository.fetchMany()

    return { provinces }
  }
}
