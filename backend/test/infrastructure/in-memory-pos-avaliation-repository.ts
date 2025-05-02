import { PosAvaliation } from "@/domain/pos/enterprise/entities/pos-avaliation.entity"
import { IPosAvaliationRepository } from "@/domain/pos/application/interfaces/pos-avaliation-repository.interface"


export class InMemoryPosAvaliationRepository implements IPosAvaliationRepository {
    public items:PosAvaliation[] = []

    async save(posAvaliation: PosAvaliation) {
        this.items.push(posAvaliation)
    }

    async fetchAll(): Promise<PosAvaliation[]> {
        return this.items       
    }
}