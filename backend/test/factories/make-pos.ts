import path from "path"
import { readFileSync } from "fs"
import { UploadPosUseCase } from "@/domain/pos/application/use-cases/pos/upload-pos.useCase"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"

export function makePos(repository:IPosRepository){

    const posXlsxFile = path.resolve("test/assets/pontos_vendas.xlsx")
    const posBuffer = readFileSync(posXlsxFile)
    
    const useCase = new UploadPosUseCase(repository)

    const res = useCase.execute({buffer:posBuffer})

    return res
}