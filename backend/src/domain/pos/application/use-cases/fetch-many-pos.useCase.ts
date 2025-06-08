import { PaginationParams } from "@/core/types/params"
import { PosProps } from "../../enterprise/entities/pos.entity"
import { IPosRepository } from "../interfaces/pos-repository.interface"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"

export class FetchManyPosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<TPaginatedDataResponseDTO<PosProps>> {
    if (!limit) {
      const pos = await this.repository.fetchMany({ limit, page })
      return {
        data: pos.map((p) => p.toJSON()),
        total: pos.length,
        totalPages: 1,
      }
    }

    const offset = page && page > 0 ? (page - 1) * limit : 0

    const [pos, total] = await Promise.all([
      this.repository.fetchMany({ page: offset, limit }),
      this.repository.countAll(),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: pos.map((p) => p.toJSON()),
      total,
      totalPages,
    }
  }
}
