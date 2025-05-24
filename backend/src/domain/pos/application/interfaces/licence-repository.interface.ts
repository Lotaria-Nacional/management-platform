import { Licence } from "../../enterprise/entities/licence.entity"

export interface ILicenceRepository {
  fetchMany(): Promise<Licence[]>
}
