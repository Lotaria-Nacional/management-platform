import { NotFoundError } from "@/core/errors/not-found-error"
import { Pos } from "../../enterprise/entities/pos.entity"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class GetPosByIdUseCase {
  constructor(private repository: IPosRepository) {}

  async execute(id: string): Promise<{ pos: Pos }> {
    const pos = await this.repository.getById(id)

    if (!pos) {
      throw new NotFoundError("Pos não encontrado")
    }

    return { pos }
  }
}
