import { PaginationParams } from "@/core/types/params"
import { Licence } from "../../enterprise/entities/licence.entity"

export interface ILicenceRepository {
  create(licence:Licence): Promise<void>
  save(licence:Licence): Promise<void>
  delete(id:string): Promise<void>
  fetchMany(params:PaginationParams): Promise<Licence[]>
  getById(id:string): Promise<Licence | null>
  countAll(): Promise<number>
}
