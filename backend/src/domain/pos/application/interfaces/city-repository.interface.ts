import { City } from "../../enterprise/entities/city.entity"

export interface ICityRepository {
  fetchMany(): Promise<City[]>
}
