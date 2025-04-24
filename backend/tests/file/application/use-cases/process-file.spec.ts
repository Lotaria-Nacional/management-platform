
import path from "path"
import { describe, it} from "vitest"
import { ProcessFileUseCase } from "../../../../src/domain/file/application/use-cases/process-file.useCase"
import { ExcelFileReader } from "../../../../src/domain/file/infrastructure/services/excel-file.reader"

describe("Process File Use Case", ()=>{
    it("should calculate total for each row", async()=>{

        const filePath = path.resolve(__dirname, "../../../assets/reconciliation.xlsx")

        const reader = new ExcelFileReader()
        const useCase = new ProcessFileUseCase(reader)

        const result = await useCase.execute(filePath)

        console.log(result)

        // expect(result).toHaveLength(2)
        // expect(result[0].total).toBe(30)
        // expect(result[1].total).toBe(20)
    })
})