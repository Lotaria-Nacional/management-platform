import { makePos } from "@test/factories/make-pos";
import { EditPosUseCase } from "@/domain/pos/application/use-cases/edit-pos.useCase";
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository";

let repository:InMemoryPosRepository
let sut:EditPosUseCase

describe("Edit Pos", ()=>{
    
    beforeEach(()=>{
        repository = new InMemoryPosRepository()
        sut = new EditPosUseCase(repository)
    })
    it("should be able to edit a pos", async ()=>{
  
        const { pos } = makePos("1")

        await repository.create(pos)

        await sut.execute({id: pos.id, city:"City Updated"})

        expect(repository.items).toHaveLength(1)
        expect(repository.items[0].city).toBe("City Updated")
    })

})