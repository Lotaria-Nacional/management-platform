import { FetchPosUseCase } from "@/domain/pos/application/use-cases/pos/fetch-pos.useCase"
import { FetchPosController } from "@/domain/pos/presentation/controllers/pos/fetch-pos.controller"
import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"

export function makeFetchPosController(repository:IPosRepository){
    const fetchPosUseCase = new FetchPosUseCase(repository)
    const fetchPosController = new FetchPosController(fetchPosUseCase)
    
    return { fetchPosController } 
}