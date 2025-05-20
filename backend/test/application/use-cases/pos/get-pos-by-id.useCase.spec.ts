import { makePos } from "@test/factories/make-pos";
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository";
import { GetPosByIdUseCase } from "@/domain/pos/application/use-cases/get-pos-by-id.useCase";


let repository:InMemoryPosRepository
let sut:GetPosByIdUseCase

describe("Get Pos By Id", ()=>{
    
    beforeEach(()=>{
        repository = new InMemoryPosRepository()
        sut = new GetPosByIdUseCase(repository)
    })
    it("should be able to get a pos by id", async ()=>{
  
        const { pos:p1 } = makePos("1")
        const { pos:p2 } = makePos("2", {licence:"0000"})

        await repository.create(p1)
        await repository.create(p2)

        await sut.execute("2",)

        expect(repository.items).toHaveLength(2)
        expect(repository.items[1].licence).toBe("0000")
    })

})