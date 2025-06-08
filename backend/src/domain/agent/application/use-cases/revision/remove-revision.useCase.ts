import { IRevisionRepository } from "../../interfaces/revision-repository.interface"

export class RemoveRevisionUseCase {
  constructor(private repository: IRevisionRepository) {}

  async execute(id: string) {
    const revision = await this.repository.getById(id)

    if (!revision) {
      throw new Error("Revision not found.")
    }

    await this.repository.delete(id)
  }
}
