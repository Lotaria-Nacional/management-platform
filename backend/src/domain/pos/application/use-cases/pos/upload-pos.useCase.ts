import { parseXlsx } from "@/shared/utils/parse-xlsx";
import { XlsxPosMapper } from "../../mapper/xlsx-pos.mapper";
import { IPosRepository } from "../../interfaces/pos-repository.interface";
import { IUploadPosRequestDTO, IUploadPosUesponseDTO } from "../../dto/pos/upload-pos.dto";

export class UploadPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(request:IUploadPosRequestDTO):Promise<IUploadPosUesponseDTO>{
        
        const rawData = parseXlsx({ buffer:request.buffer })
            
        const pos = XlsxPosMapper.toPos(rawData)

        await this.posRepository.createMany(pos)

        return { pos }
    }
}