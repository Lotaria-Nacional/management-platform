import { IFileReader } from "../interface/file-reader";
import { ParsedRowDTO } from "../../enterprise/dtos/parsed-row-dto";
import { FileDataProcessor } from "../../enterprise/services/file-data-processor";

export class ProcessFileUseCase {
    constructor(private fileReader:IFileReader){}

    async execute(file:Buffer):Promise<(ParsedRowDTO)[]>{
        const data = await this.fileReader.read(file)
        const processor = new FileDataProcessor()
        return processor.process(data)
    }
}