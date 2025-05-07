import { Pos } from "../../enterprise/entities/pos.entity";

export interface IPosRepository {
    create(pos:Pos):Promise<void>
    save(pos:Pos):Promise<Pos>
    createMany(pos:Pos[]):Promise<void>
    fetchAll():Promise<Pos[]>
    findById(id:string):Promise<Pos | null>
}