import { RawData } from "@/core/types/raw-data.type";
import { safeString } from "@/shared/utils/safe-string";
import { Terminal } from "../../enterprise/entities/terminal.entity";

export class XlsxTerminalMapper {
    static toTerminals(rawData:RawData[]){
        
        return rawData.map((item)=> Terminal.create({
            id_terminal: safeString(item["ID REVENDEDOR"] || "ND"),
            serial: safeString(item["Nº DE SERIE DO TERMINAL"] || "ND"),
            sim_card:safeString(item["Nº DO CARTÃO UNITEL"] || "ND")
        }))
    }
}