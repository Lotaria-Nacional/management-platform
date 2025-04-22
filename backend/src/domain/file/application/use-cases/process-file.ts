import { IFileReader } from "../interface/file-reader";
import { ParsedRowDTO } from "../../enterprise/dtos/parsed-row-dto";
import { FileProcessor } from "../../enterprise/services/file-processor";

export class ProcessFileUseCase {
    constructor(private fileReader:IFileReader){}

    async execute(filePath:string):Promise<(ParsedRowDTO)[]>{
        const data = await this.fileReader.read(filePath)
        const processor = new FileProcessor()
        return processor.process(data)
    }
}