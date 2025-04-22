import { FileData } from "../entities/file-data";
import { ParsedRowDTO } from "../dtos/parsed-row-dto";

export class FileProcessor {
    process(data:ParsedRowDTO[]): (ParsedRowDTO)[] {
        return data.map((row)=>{
            const entity = new FileData(row)
            return entity.toObject()
        })
    }
}