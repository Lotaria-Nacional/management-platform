import { Licence } from "../../enterprise/entities/licence.entity"

export interface ILicenceRepository {
  create(licence:Licence): Promise<void>
  save(licence:Licence): Promise<void>
  delete(id:string): Promise<void>
  fetchMany(): Promise<Licence[]>
  getById(id:string): Promise<Licence | null>
}
