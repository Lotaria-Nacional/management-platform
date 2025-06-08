import {
  Revision,
  RevisionProps,
} from "@/domain/agent/enterprise/entities/revision.entity"
import { PaginationParams } from "@/core/types/params"
import { calculatePagination } from "@/shared/utils/calculate-pagination"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"
import { IRevisionRepository } from "../../interfaces/revision-repository.interface"

export class FetchManyRevisionsUseCase {
  constructor(private repository: IRevisionRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<TPaginatedDataResponseDTO<RevisionProps>> {
    if (!limit) {
      const revisions = await this.repository.fetchMany({ page, limit })
      return {
        totalPages: 1,
        total: revisions.length,
        data: revisions.map((revision) => revision.toJSON()),
      }
    }

    const { data, total, totalPages } = await calculatePagination<Revision>(
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
