import { parseXlsx } from "@/shared/utils/parse-xlsx";
import { XlsxPosMapper } from "../mapper/xlsx-pos.mapper";
import { IPosRepository } from "../interfaces/pos-repository.interface";
import { UploadPosUseCaseRequest,UploadPosUseCaseResponse } from "../dto/upload-pos.dto";

export class UploadPosUseCase {
    constructor(private posRepository:IPosRepository){}

    async execute(request:UploadPosUseCaseRequest):Promise<UploadPosUseCaseResponse>{
        
        const rawData = parseXlsx({ buffer:request.buffer })
            
        const pos = XlsxPosMapper.toPos(rawData)

        await this.posRepository.saveMany(pos)

        return { pos }
    }
}