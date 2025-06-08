import { PaginationParams } from "@/core/types/params"
import { calculatePagination } from "@/shared/utils/calculate-pagination"
import { LicenceProps } from "@/domain/pos/enterprise/entities/licence.entity"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class FetchManyLicencesUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<TPaginatedDataResponseDTO<LicenceProps>> {
    if (!limit) {
      const licences = await this.repository.fetchMany({ limit, page })
      return {
        totalPages: 1,
        total: licences.length,
        data: licences.map((l) => l.toJSON()),
      }
    }

    const { data, total, totalPages } = await calculatePagination(
      this.repository,
      { limit, page }
    )

    return {
      total,
      totalPages,
      data: data.map((licence) => licence.toJSON()),
    }
  }
}
