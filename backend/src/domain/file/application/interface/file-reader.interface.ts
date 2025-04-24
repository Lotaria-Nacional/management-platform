import {  ParsedRowDTO } from "../../enterprise/dtos/parsed-row.dto";

export interface IFileReader {
    read(file:Buffer):Promise<ParsedRowDTO[]>
}