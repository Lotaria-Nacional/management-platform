import { IPosRepository } from "../interfaces/pos-repository.interface"

export class RemovePosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute(id: string): Promise<void> {
    const pos = await this.repository.getById(id)

    if (!pos) {
      throw new Error("Pos Not Found")
    }

    await this.repository.delete(id)
  }
}
