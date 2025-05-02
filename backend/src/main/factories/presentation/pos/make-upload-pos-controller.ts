import { UploadPosUseCase } from "@/domain/pos/application/use-cases/pos/upload-pos.useCase"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"
import { UploadPosController } from "@/domain/pos/presentation/controllers/pos/upload-pos.controller"

export function makeUploadPosController(repository:IPosRepository){
    const uploadPosUseCase = new UploadPosUseCase(repository)
    const uploadPosController = new UploadPosController(uploadPosUseCase)
    return { uploadPosController } 
}