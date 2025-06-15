import { PaginationParams } from "@/core/types/params"
import { Pos } from "../../enterprise/entities/pos.entity"
import { PosExtraFilters } from "../use-cases/fetch-many-pos.useCase"

export interface IPosRepository {
  create(pos: Pos, tx?: unknown): Promise<void>
  fetchMany(params?: PaginationParams & PosExtraFilters): Promise<Pos[]>
  getById(id: string, tx?: unknown): Promise<Pos | null>
  save(pos: Pos, tx?: unknown): Promise<void>
  delete(id: string, tx?: unknown): Promise<void>
  countAll(params?: PosExtraFilters): Promise<number>
}
