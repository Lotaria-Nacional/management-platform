import { Pos } from "@/domain/pos/enterprise/entities/pos.entity";
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface";

export class InMemoryPosRepository implements IPosRepository {
    public items:Pos[] = []

    async saveMany(pos: Pos[]) {
        this.items.push(...pos)
    }

    async fetchAll() {
        return this.items
    }
}