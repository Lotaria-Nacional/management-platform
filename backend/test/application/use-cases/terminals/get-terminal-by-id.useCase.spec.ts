// import { makeTerminal, makeTerminals } from "@test/factories/make-terminals";
// import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository";
// import { FetchTerminalsUseCase } from "@/domain/terminal/application/use-cases/fetch-terminal.useCase";
// import { GetTerminalByIdUseCase } from "@/domain/terminal/application/use-cases/get-terminal-by-id.useCase";

// let repo:InMemoryTerminalRepository
// let sut:GetTerminalByIdUseCase

// describe("Get Terminal By Id", ()=>{
    
//     beforeEach(()=>{
//         repo = new InMemoryTerminalRepository()
//         sut = new GetTerminalByIdUseCase(repo)
//     })
//     it("should be able to fetch all terminals", async ()=>{
  
//         const { terminal: terminal_1  } = makeTerminal({
//             serial:"Serial that Paulo added"
//         })
//         const { terminal: terminal_2  } = makeTerminal()
        
//         await repo.create(terminal_1)
//         await repo.create(terminal_2)
        
//         const { terminal } = await sut.execute({id:terminal_1.id})
        
//         expect(repo.items).toHaveLength(2)
//         expect(terminal?.props.serial).toBe("Serial that Paulo added")
//     })

// })