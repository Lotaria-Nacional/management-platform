import { TEditPosDTO } from "../validations/edit-pos-schema"
import { NotFoundError } from "@/core/errors/not-found-error"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class EditPosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute({ id, ...updates }: TEditPosDTO) {
    const pos = await this.repository.getById(id)

    if (!pos) {
      throw new NotFoundError("POS não encontrado")
    }

    pos.update(updates)

    pos.checkPosStatus()

    await this.repository.save(pos)
  }
}
