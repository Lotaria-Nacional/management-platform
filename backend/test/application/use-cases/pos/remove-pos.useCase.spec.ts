import { makePos } from "@test/factories/make-pos"
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository"
import { RemovePosUseCase } from "@/domain/pos/application/use-cases/remove-pos.useCase"

let repository: InMemoryPosRepository
let sut: RemovePosUseCase

describe("Remove Pos", () => {
  beforeEach(() => {
    repository = new InMemoryPosRepository()
    sut = new RemovePosUseCase(repository)
  })
  it("should be able to remove a pos", async () => {
    const { pos: p1 } = makePos("1")
    const { pos: p2 } = makePos("2")
    const { pos: p3 } = makePos("3")

    await repository.create(p1)
    await repository.create(p2)
    await repository.create(p3)

    await sut.execute("2")

    expect(repository.items).toHaveLength(2)
  })
})
