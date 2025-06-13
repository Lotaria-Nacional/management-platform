import { TEditPosDTO } from "../validations/edit-pos-schema"
import { NotFoundError } from "@/core/errors/not-found-error"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class EditPosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute(data: TEditPosDTO) {
    const pos = await this.repository.getById(data.id)

    if (!pos) {
      throw new NotFoundError("Pos não encontrado")
    }

    pos.update(data)

    pos.checkPosStatus()

    await this.repository.save(pos)
  }
}
