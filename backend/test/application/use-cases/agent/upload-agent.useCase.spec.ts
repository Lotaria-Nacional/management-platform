import path from "path"
import { readFileSync } from "fs"
import { InMemoryAgentsRepository } from "@test/infrastructure/in-memory-agent.repository"
import { UploadAgentUseCase } from "@/domain/agent/application/use-cases/agent/upload-agent.useCase"

let agentRepository: InMemoryAgentsRepository
let sut: UploadAgentUseCase

describe("Upload Agent", () => {
  beforeEach(() => {
    agentRepository = new InMemoryAgentsRepository()
    sut = new UploadAgentUseCase(agentRepository)
  })
  it("should be able to upload a parsed version of an Agents.csv file", async () => {
    const agentXlsxFile = path.resolve("test/assets/agentes.xlsx")
    const agentBuffer = readFileSync(agentXlsxFile)

    await sut.execute({ buffer: agentBuffer })

    expect(agentRepository.items.length).toBeGreaterThan(1)
  })
})
