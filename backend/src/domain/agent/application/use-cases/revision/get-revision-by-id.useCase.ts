import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"
import { IRevisionRepository } from "../../interfaces/revision-repository.interface"

export class GetRevisionByIdUseCase {
  constructor(private repository: IRevisionRepository) {}

  async execute(id: string): Promise<{ revision: Revision }> {
    const revision = await this.repository.getById(id)

    if (!revision) {
      throw new Error("Not Found")
    }

    return { revision }
  }
}
