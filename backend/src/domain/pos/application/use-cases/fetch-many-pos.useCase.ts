import { PaginationParams } from "@/core/types/params"
import { PosProps } from "../../enterprise/entities/pos.entity"
import { IFetchDataResponse } from "@/core/types/fetch-response"
import { IPosRepository } from "../interfaces/pos-repository.interface"

export class FetchManyPosUseCase {
  constructor(private posRepository: IPosRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<IFetchDataResponse<PosProps>> {
    if (!limit) {
      const pos = await this.posRepository.fetchMany({ limit, page })
      return {
        data: pos.map((p) => p.toJSON()),
        total: pos.length,
        totalPages: 1,
      }
    }

    const offset = page && page > 0 ? (page - 1) * limit : 0

    const [pos, total] = await Promise.all([
      this.posRepository.fetchMany({ page: offset, limit }),
      this.posRepository.countAll(),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: pos.map((p) => p.toJSON()),
      total,
      totalPages,
    }
  }
}
