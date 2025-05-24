import { Type } from "../../enterprise/entities/type.entity"

export interface ITypeRepository {
  fetchMany(): Promise<Type[]>
}
