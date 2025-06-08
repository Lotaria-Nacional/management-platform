import { PaginationParams } from "@/core/types/params"
import { IFetchDataResponse } from "@/core/types/paginated-data-response"
import { LicenceProps } from "@/domain/pos/enterprise/entities/licence.entity"
import { ILicenceRepository } from "../../interfaces/licence-repository.interface"

export class FetchManyLicenceUseCase {
  constructor(private repository: ILicenceRepository) {}

  async execute({
    limit,
    page,
  }: PaginationParams): Promise<IFetchDataResponse<LicenceProps>> {
    if (!limit) {
      const licences = await this.repository.fetchMany({ limit, page })
      return {
        totalPages: 1,
        total: licences.length,
        data: licences.map((l) => l.toJSON()),
      }
    }

    const offset = page && page > 0 ? (page - 1) * limit : 0

    const [licences, total] = await Promise.all([
      this.repository.fetchMany({ page: offset, limit }),
      this.repository.countAll(),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      total,
      totalPages,
      data: licences.map((l) => l.toJSON()),
    }
  }
}
