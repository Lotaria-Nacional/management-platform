import { Pos } from "../../enterprise/entities/pos.entity";

export interface IPosRepository {
    saveMany(pos:Pos[]):Promise<void>
    fetchAll():Promise<Pos[]>
}