import { Supervision } from "@/domain/agent/enterprise/entities/supervision.entity"
import { ISupervisionRepository } from "../../interfaces/supervision-repository.interface"

export class GetSupervisionByIdUseCase {
  constructor(private repository: ISupervisionRepository) {}

  async execute(id: string): Promise<{ supervision: Supervision }> {
    const supervision = await this.repository.getById(id)

    if (!supervision) {
      throw new Error("Not Found")
    }

    return { supervision }
  }
}
