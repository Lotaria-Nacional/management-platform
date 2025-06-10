import { Supervision } from "@/domain/agent/enterprise/entities/supervision.entity"
import { ISupervisionRepository } from "../../interfaces/supervision-repository.interface"
import { TMakeSupervisionDTO } from "../../validations/supervision/make-supervision-schema"

export class MakeSupervisionUseCase {
  constructor(private repository: ISupervisionRepository) {}

  async execute(data: TMakeSupervisionDTO): Promise<void> {
    const { additional_info, agent_id, image, items } = data

    const supervision = Supervision.create({
      agent_id,
      additional_info,
      items,
      image,
    })

    await this.repository.create(supervision)
  }
}
