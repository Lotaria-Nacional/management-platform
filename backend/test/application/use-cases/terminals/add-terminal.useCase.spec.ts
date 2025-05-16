import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository";
import { AddTerminalUseCase } from "@/domain/terminal/application/use-cases/add-terminal.useCase";

let repo:InMemoryTerminalRepository
let sut:AddTerminalUseCase

describe("Add Terminal", ()=>{
    
    beforeEach(()=>{
        repo = new InMemoryTerminalRepository()
        sut = new AddTerminalUseCase(repo)
    })
    it("should be able to add a terminal", async ()=>{
        await sut.execute({ 
            agent_id:"agent-id-test",
            id_terminal:"terminal-id-test",
            serial:"serial-number-test",
            sim_card:"sim-card-test"
         })

        expect(repo.items).toHaveLength(1)
    })

})