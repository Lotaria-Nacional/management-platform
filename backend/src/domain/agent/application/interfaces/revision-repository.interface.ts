import { PaginationParams } from "@/core/types/params"
import { Revision } from "../../enterprise/entities/revision.entity"

export interface IRevisionRepository {
  create(revision: Revision): Promise<void>
  save(revision: Revision): Promise<void>
  fetchMany(params?: PaginationParams): Promise<Revision[]>
  getById(id: string): Promise<Revision | null>
  delete(id: string): Promise<void | null>
  countAll(): Promise<number>
}
