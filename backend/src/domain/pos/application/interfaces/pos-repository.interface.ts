import { Pos } from "../../enterprise/entities/pos.entity";

export interface IPosRepository {
    create(pos:Pos):Promise<void>
    fetchMany():Promise<Pos[]>
    getById(id:string):Promise<Pos | null>
    save(pos:Pos):Promise<void>
    delete(id:string):Promise<void>
}