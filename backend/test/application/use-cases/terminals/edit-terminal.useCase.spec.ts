// import { makeTerminal } from "@test/factories/make-terminals"
// import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository"
// import { EditTerminalUseCase } from "@/domain/terminal/application/use-cases/edit-terminal.useCase"

// let repo: InMemoryTerminalRepository
// let sut: EditTerminalUseCase

// describe("Edit Terminal", () => {
//   beforeEach(() => {
//     repo = new InMemoryTerminalRepository()
//   })
//   it("should be able to edit a terminal", async () => {
//     const { terminal } = makeTerminal()
//     await repo.create(terminal)
//   })

//   expect(repo.items).toHaveLength(1)
//   expect(repo.items[0].props.serial).toBe("updated")
// })
