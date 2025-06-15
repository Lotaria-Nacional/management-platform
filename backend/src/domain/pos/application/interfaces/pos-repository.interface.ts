import { PaginationParams } from "@/core/types/params"
import { Pos } from "../../enterprise/entities/pos.entity"
import { PosExtraFilters } from "../use-cases/fetch-many-pos.useCase"

export interface IPosRepository {
  create(pos: Pos): Promise<void>
  fetchMany(params?: PaginationParams & PosExtraFilters): Promise<Pos[]>
  getById(id: string): Promise<Pos | null>
  save(pos: Pos): Promise<void>
  delete(id: string): Promise<void>
  countAll(params?: PosExtraFilters): Promise<number>
}
