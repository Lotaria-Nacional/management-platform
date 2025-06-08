import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"
import { TMakeRevisionDTO } from "../../validations/revision/make-revision-schema"
import { IRevisionRepository } from "../../interfaces/revision-repository.interface"

export class MakeRevisionUseCase {
  constructor(private repository: IRevisionRepository) {}

  async execute(data: TMakeRevisionDTO): Promise<void> {
    const { additional_info, agent_id, image, items } = data

    const revision = Revision.create({
      agent_id,
      additional_info,
      items,
      image,
    })

    await this.repository.create(revision)
  }
}
