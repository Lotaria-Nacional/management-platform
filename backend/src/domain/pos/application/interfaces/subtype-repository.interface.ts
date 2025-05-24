import { Subtype } from "../../enterprise/entities/subtype.entity"

export interface ISubtypeRepository {
  fetchMany(): Promise<Subtype[]>
}
