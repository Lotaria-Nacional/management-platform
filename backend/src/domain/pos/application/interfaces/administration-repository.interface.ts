import { Administration } from "../../enterprise/entities/administration.entity"

export interface IAdministrationRepository {
  fetchMany(): Promise<Administration[]>
  getById(id:string): Promise<Administration | null>
}
