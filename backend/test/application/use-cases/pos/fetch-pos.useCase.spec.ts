import { makePos } from "@test/factories/make-pos";
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository";
import { FetchPosUseCase } from "@/domain/pos/application/use-cases/pos/fetch-pos.useCase";


let posRepository:InMemoryPosRepository
let sut:FetchPosUseCase

describe("Fetch All Pos", ()=>{
    
    beforeEach(()=>{
        posRepository = new InMemoryPosRepository()
        sut = new FetchPosUseCase(posRepository)
    })
    it("should be able to fetch all pos", async ()=>{
  
        makePos(posRepository)
        
        const { pos } = await sut.execute()

        expect(pos.length).toBeGreaterThan(1)
    })

})