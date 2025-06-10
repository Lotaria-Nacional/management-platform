import { ISupervisionRepository } from "../../interfaces/supervision-repository.interface"

export class RemoveSupervisionUseCase {
  constructor(private repository: ISupervisionRepository) {}

  async execute(id: string) {
    const supervision = await this.repository.getById(id)

    if (!supervision) {
      throw new Error("Supervision not found.")
    }

    await this.repository.delete(id)
  }
}
