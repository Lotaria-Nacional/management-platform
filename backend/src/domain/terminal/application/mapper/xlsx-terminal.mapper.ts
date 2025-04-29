import { RawData } from "@/core/types/raw-data.type";
import { safeString } from "@/shared/utils/safe-string";
import { Terminal } from "../../enterprise/entities/terminal.entity";

export class XlsxTerminalMapper {
    static toTerminals(rawData:RawData[]){
        
        return rawData.map((item)=> Terminal.create({
            id_terminal: safeString(item["ID"] || item["id_terminal"]),
            serial: safeString(item["SERIAL"] || item["id_terminal"]),
            sim_card:safeString(item["Nº DO CARTÃO UNITEL"] || item["sim_card"])
        }))
    }
}