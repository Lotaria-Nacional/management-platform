import { Province } from "../../enterprise/entities/province.entity"

export interface IProvinceRepository {
  fetchMany(): Promise<Province[]>
}
