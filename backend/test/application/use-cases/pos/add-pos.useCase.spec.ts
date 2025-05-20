import { IAddPosRequestDTO } from "@/domain/pos/application/dto/add-pos.dto";
import { AddPosUseCase } from "@/domain/pos/application/use-cases/add-pos.useCase";
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository";

let repository:InMemoryPosRepository
let sut:AddPosUseCase

describe("Add Pos", ()=>{
    
    beforeEach(()=>{
        repository = new InMemoryPosRepository()
        sut = new AddPosUseCase(repository)
    })

    it("should be able to add a pos", async ()=>{
        
        const request:IAddPosRequestDTO = {
            id_pos:"1234",
            id_reference_pos:"1234",
            coordinates:"1234",
            type:"1234",
            licence:"1234",
            zone:"1234",
            area:"1234",
            city:"1234",
            province:"1234",
            agent_id:"1234",
            admin:"1234",
        }

        await sut.execute(request)

        expect(repository.items).toHaveLength(1)
    })

})