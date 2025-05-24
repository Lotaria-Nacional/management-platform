import { Zone } from "../../enterprise/entities/zone.entity"

export interface IZoneRepository {
  fetchMany(): Promise<Zone[]>
}
