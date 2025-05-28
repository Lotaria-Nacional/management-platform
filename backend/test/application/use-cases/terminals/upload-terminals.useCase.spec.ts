// import path from "path";
// import { readFileSync } from "fs";
// import { InMemoryTerminalRepository } from "@test/infrastructure/in-memory-terminal.repository";
// import { UploadTerminalsUseCase } from "@/domain/terminal/application/use-cases/upload-terminal.useCase";

// let terminalRepository:InMemoryTerminalRepository
// let sut:UploadTerminalsUseCase

// describe("Upload Terminals", ()=>{

//     beforeEach(()=>{
//         terminalRepository = new InMemoryTerminalRepository()
//         sut = new UploadTerminalsUseCase(terminalRepository)
//     })
//     it("should be able to upload a parsed version of a Terminal.csv file", async ()=>{

//         const terminalXlsxFile = path.resolve("test/assets/terminais.xlsx")
//         const terminalBuffer = readFileSync(terminalXlsxFile)

//         await sut.execute({ buffer:terminalBuffer })

//         expect(terminalRepository.items.length).toBeGreaterThan(1)
//     })

// })
