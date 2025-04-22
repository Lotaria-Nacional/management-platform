import {  ParsedRowDTO } from "../../enterprise/dtos/parsed-row-dto";

export interface IFileReader {
    read(filePath:string):Promise<ParsedRowDTO[]>
}