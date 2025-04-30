import { UploadPosUseCase } from "@/domain/pos/application/use-cases/upload-pos.useCase"
import { UploadPosController } from "@/domain/pos/presentation/controllers/upload-pos.controller"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"

export function makeUploadPosController(repository:IPosRepository){
    const uploadPosUseCase = new UploadPosUseCase(repository)
    const uploadPosController = new UploadPosController(uploadPosUseCase)
    return { uploadPosController } 
}