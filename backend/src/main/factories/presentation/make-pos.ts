import { FetchPosUseCase } from "@/domain/pos/application/use-cases/pos/fetch-pos.useCase"
import { UploadPosUseCase } from "@/domain/pos/application/use-cases/pos/upload-pos.useCase"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"
import { FetchPosController } from "@/domain/pos/presentation/controllers/pos/fetch-pos.controller"
import { UploadPosController } from "@/domain/pos/presentation/controllers/pos/upload-pos.controller"

export class MakePosController {

    constructor(private repository:IPosRepository){}

    uploadPos(){
        const useCase = new UploadPosUseCase(this.repository!!)
        const uploadPosController = new UploadPosController(useCase)
        return { uploadPosController } 
    }

    fetchPos(){
        const fetchPosUseCase = new FetchPosUseCase(this.repository!!)
        const fetchPosController = new FetchPosController(fetchPosUseCase)
        
        return { fetchPosController } 
    }

    

}