import { makePos } from "@test/factories/make-pos";
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository";
import { FetchManyPosUseCase } from "@/domain/pos/application/use-cases/fetch-many-pos.useCase";


let repository:InMemoryPosRepository
let sut:FetchManyPosUseCase

describe("Fetch All Pos", ()=>{
    
    beforeEach(()=>{
        repository = new InMemoryPosRepository()
        sut = new FetchManyPosUseCase(repository)
    })
    it("should be able to fetch all pos", async ()=>{
  
        const { pos:p1 } = makePos("1")
        const { pos:p2 } = makePos("2")
        const { pos:p3 } = makePos("3")
        
        repository.create(p1)
        repository.create(p2)
        repository.create(p3)
        
        const { pos } = await sut.execute()

        expect(pos).toHaveLength(3)
    })

})