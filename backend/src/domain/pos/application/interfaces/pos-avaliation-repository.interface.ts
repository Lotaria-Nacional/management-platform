import { PosAvaliation } from "../../enterprise/entities/pos-avaliation.entity";

export interface IPosAvaliationRepository {
    save(postAvaliation:PosAvaliation):Promise<void>
    fetchAll():Promise<PosAvaliation[]>
}