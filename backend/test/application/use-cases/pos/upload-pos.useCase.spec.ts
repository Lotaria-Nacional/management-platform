import path from "path";
import { readFileSync } from "fs";
import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos.repository";
import { UploadPosUseCase } from "@/domain/pos/application/use-cases/upload-pos.useCase";


let posRepository:InMemoryPosRepository
let sut:UploadPosUseCase

describe("Upload Pos", ()=>{
    
    beforeEach(()=>{
        posRepository = new InMemoryPosRepository()
        sut = new UploadPosUseCase(posRepository)
    })
    it("should be able to upload a parsed version of a Pos.csv file", async ()=>{
  
        const posXlsxFile = path.resolve("test/assets/pontos_vendas.xlsx")
        const posBuffer = readFileSync(posXlsxFile)
        
        await sut.execute({ buffer:posBuffer })
        
        expect(posRepository.items.length).toBeGreaterThan(1)
    })

})