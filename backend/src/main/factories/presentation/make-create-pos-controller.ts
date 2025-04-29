import { InMemoryPosRepository } from "@test/infrastructure/in-memory-pos-repository"
import { UploadPosUseCase } from "@/domain/pos/application/use-cases/upload-pos.useCase"
import { UploadPosController } from "@/domain/pos/presentation/controllers/upload-pos.controller"

export function makeUploadPosController(){
    const inMemoryPosRepository = new InMemoryPosRepository()
    const uploadPosUseCase = new UploadPosUseCase(inMemoryPosRepository)
    const uploadPosController = new UploadPosController(uploadPosUseCase)
    return { uploadPosController } 
}