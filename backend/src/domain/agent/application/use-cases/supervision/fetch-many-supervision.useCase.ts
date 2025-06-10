import {
  Supervision,
  SupervisionProps
} from "@/domain/agent/enterprise/entities/supervision.entity"
import { PaginationParams } from "@/core/types/params"
import { calculatePagination } from "@/shared/utils/calculate-pagination"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"
import { ISupervisionRepository } from "../../interfaces/supervision-repository.interface"

export class FetchManySupervisionUseCase {
  constructor(private repository: ISupervisionRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<TPaginatedDataResponseDTO<SupervisionProps>> {
    if (!limit) {
      const supervision = await this.repository.fetchMany({ page, limit })
      return {
        totalPages: 1,
        total: supervision.length,
        data: supervision.map((revision) => revision.toJSON()),
      }
    }

    const { data, total, totalPages } = await calculatePagination<Supervision>(
      this.repository,
      { limit, page }
    )

    return {
      total,
      totalPages,
      data: data.map((revision) => revision.toJSON()),
    }
  }
}
