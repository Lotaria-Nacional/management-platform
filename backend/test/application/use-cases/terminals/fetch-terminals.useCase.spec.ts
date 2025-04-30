import { makeTerminals } from "@test/factories/make-terminals";
import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository";
import { FetchTerminalsUseCase } from "@/domain/terminal/application/use-cases/fetch-terminal.useCase";


let terminalRepository:InMemoryTerminalRepository
let sut:FetchTerminalsUseCase

describe("Fetch All Terminals", ()=>{
    
    beforeEach(()=>{
        terminalRepository = new InMemoryTerminalRepository()
        sut = new FetchTerminalsUseCase(terminalRepository)
    })
    it("should be able to fetch all terminals", async ()=>{
  
        makeTerminals(terminalRepository)
        
        const { terminals } = await sut.execute()
        
        expect(terminals.length).toBeGreaterThan(1)
    })

})