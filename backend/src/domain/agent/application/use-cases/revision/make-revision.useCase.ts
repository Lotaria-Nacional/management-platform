import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"
import { IMakeRevisionRequestDTO } from "../../dto/revision/make-revision.dto"
import { IRevisionRepository } from "../../interfaces/revision-repository.interface"

export class MakeRevisionUseCase {
  constructor(private revisionRepo: IRevisionRepository) {}

  async execute(data: IMakeRevisionRequestDTO): Promise<void> {
    const { additional_info, agent_id, image, items } = data

    const revision = Revision.create({
      agent_id,
      additional_info,
      items,
      image,
      created_at: new Date(),
    })
    console.log(revision.props)

    await this.revisionRepo.create(revision)
  }
}
