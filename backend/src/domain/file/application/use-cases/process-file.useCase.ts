import { IFileReader } from "../interface/file-reader.interface";
import { AgentRepository } from "../interface/agent.repository";
import { ParsedRowDTO } from "../../enterprise/dtos/parsed-row.dto";
import { FileDataProcessor } from "../../enterprise/services/file-data-processor.service";

export class ProcessFileUseCase {
    constructor(private fileReader:IFileReader){}

    async execute(file:Buffer):Promise<(ParsedRowDTO)[]>{
        const data = await this.fileReader.read(file)
        const processor = new FileDataProcessor()
        const res = processor.process(data)
        return processor.process(data)
    }
}