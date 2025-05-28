import { IAddPosRequestDTO } from "@/domain/pos/application/dto/add-pos.dto"
import { AddPosUseCase } from "@/domain/pos/application/use-cases/add-pos.useCase"
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository"

let repository: InMemoryPosRepository
let sut: AddPosUseCase

describe("Add Pos", () => {
  beforeEach(() => {
    repository = new InMemoryPosRepository()
    sut = new AddPosUseCase(repository)
  })

  it("should be able to add a pos", async () => {
    const request: IAddPosRequestDTO = {
      id_reference: 1234,
      type_id: "1234",
      licence_id: "1234",
      zone_id: "1234",
      area_id: "1234",
      city_id: "1234",
      province_id: "1234",
      agent_id: "1234",
      administration_id: "1234",
      coordinates: [1],
      status: false,
    }

    await sut.execute(request)

    expect(repository.items).toHaveLength(1)
  })
})
