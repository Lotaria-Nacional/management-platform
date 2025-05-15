import { Revision } from "@/domain/agent/enterprise/entities/revision.entity"
import { IRevisionRepository } from "@/domain/agent/application/interfaces/revision-repository.interface"

export class InMemoryRevisionsRepository implements IRevisionRepository {
    public items:Revision[] = []

    async create(revision: Revision) {  
        this.items.push(revision)
    }

    async save(revision: Revision): Promise<void> {
        const revisionIndex = this.items.findIndex(item => item.id === revision.id);
        this.items[revisionIndex] = revision
    }

    async fetchMany() {
        return this.items       
    }

   async getById(id: string) {
        const revision = this.items.find(item => item.id === id)
        
        if(!revision) return null

        return revision
    }

    async delete(id: string): Promise<void> {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}