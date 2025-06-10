import { PaginationParams } from "@/core/types/params"
import { Supervision } from "../../enterprise/entities/supervision.entity"

export interface ISupervisionRepository {
  create(supervision: Supervision): Promise<void>
  save(supervision: Supervision): Promise<void>
  fetchMany(params?: PaginationParams): Promise<Supervision[]>
  getById(id: string): Promise<Supervision | null>
  delete(id: string): Promise<void | null>
  countAll(): Promise<number>
}
