import { PaginationParams } from "@/core/types/params"
import { PosProps } from "../../enterprise/entities/pos.entity"
import { IPosRepository } from "../interfaces/pos-repository.interface"
import { TPaginatedDataResponseDTO } from "@/core/types/paginated-data-response"

export type PosExtraFilters = {
  province_id?: string
  city_id?: string
  area_id?: string
  zone_id?: string
  type_id?: string
}

export class FetchManyPosUseCase {
  constructor(private repository: IPosRepository) {}

  async execute({
    page = 1,
    limit,
    area_id,
    city_id,
    province_id,
    type_id,
    zone_id,
  }: PaginationParams & PosExtraFilters): Promise<
    TPaginatedDataResponseDTO<PosProps>
  > {
    const isPaginated = typeof limit === "number" && limit > 0
    if (!isPaginated) {
      const pos = await this.repository.fetchMany({
        area_id,
        city_id,
        province_id,
        type_id,
        zone_id,
      })

      return {
        data: pos.map((p) => p.toJSON()),
        total: pos.length,
        totalPages: 1,
      }
    }

    const offset = (page - 1) * limit

    const [pos, total] = await Promise.all([
      this.repository.fetchMany({
        page: offset,
        limit,
        area_id,
        city_id,
        province_id,
        type_id,
        zone_id,
      }),
      this.repository.countAll({
        area_id,
        city_id,
        province_id,
        type_id,
        zone_id,
      }),
    ])

    const totalPages = Math.ceil(total / limit)

    return {
      data: pos.map((p) => p.toJSON()),
      total,
      totalPages,
    }
  }
}
