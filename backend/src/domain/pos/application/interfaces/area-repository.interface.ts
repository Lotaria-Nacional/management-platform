import { Area } from "../../enterprise/entities/area.entity"

export interface IAreaRepository {
  fetchMany(): Promise<Area[]>
}
