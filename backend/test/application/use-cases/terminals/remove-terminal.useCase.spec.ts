import { makeTerminal } from "@test/factories/make-terminals";
import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository";
import { RemoveTerminalUseCase } from "@/domain/terminal/application/use-cases/remove-terminal.useCase";

let repo:InMemoryTerminalRepository
let sut:RemoveTerminalUseCase

describe("Remove Terminal", ()=>{
    
    beforeEach(()=>{
        repo = new InMemoryTerminalRepository()
        sut = new RemoveTerminalUseCase(repo)
    })
    it("should be able to remove a terminal", async ()=>{
        const { terminal:terminal_1 } = makeTerminal()
        const { terminal:terminal_2 } = makeTerminal()

        await repo.create(terminal_1)
        await repo.create(terminal_2)
        
        await sut.execute({ id:terminal_1.id })

        expect(repo.items).toHaveLength(1)
    })

})