import { Pos } from "@/domain/pos/enterprise/entities/pos.entity";
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface";

export class InMemoryPosRepository implements IPosRepository {
    public items:Pos[] = []

    async create(pos: Pos) {
        this.items.push(pos)            
    }

    async findById(id: string) {
        const pos = this.items.find(item => item.id === id)
        if(!pos) return null
        return pos
    }

    async save(pos: Pos) {
        const posIndex = this.items.findIndex(item => item.id === pos.id)
        this.items[posIndex] = pos
        return this.items[posIndex]
    }

    async createMany(pos: Pos[]) {
        this.items.push(...pos)
    }

    async fetchAll() {
        return this.items
    }
}