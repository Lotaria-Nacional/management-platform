import { RawData } from "@/core/types/raw-data.type";
import { safeString } from "@/shared/utils/safe-string";
import { Pos } from "../../enterprise/entities/pos.entity";

export class XlsxPosMapper {
    static toPos(rawData:RawData[]){

       return rawData.map((item)=> Pos.create({
           admin: null,
           id_reference_pos: null,
           id_pos: safeString(item["ID PDV"] || item["id_pos"]),
           coordinates: safeString(item["COORDENADAS GEOGRÁFICAS"] || item["coordinates"]),
           zone: safeString(item["ZONA"] || item["zone"]),
           area: safeString(item["AREA"] || item["area"]),
           type: safeString(item["TIPO DE PDV"] || item["type"]),
           province: safeString(item["PROVINCIA"] || item["province"]),
           city: safeString(item["DISTRITO"] || item["city"]),
           licence: safeString(item["POSSUI LICENCA"] || item["licence"]),
        }))
    }
}