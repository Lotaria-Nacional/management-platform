import { IZoneRepository } from "../../interfaces/zone-repository.interface"

export class FetchManyZoneUseCase {
  constructor(private repository: IZoneRepository) {}

  async execute() {
    const zones = await this.repository.fetchMany()

    return { zones }
  }
}
