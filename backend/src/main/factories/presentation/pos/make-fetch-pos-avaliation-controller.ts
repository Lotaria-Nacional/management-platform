import { IPosAvaliationRepository } from "@/domain/pos/application/interfaces/pos-avaliation-repository.interface";
import { FetchAllPosAvaliationUseCase } from "@/domain/pos/application/use-cases/pos-avaliation/fetch-all-pos-avaliation.useCase";
import { FetchAllPosAvaliationController } from "@/domain/pos/presentation/controllers/pos-avaliation/fetch-all-pos-avaliation.controller";

export function makeFetchPosAvaliationController(repository:IPosAvaliationRepository) {
    const fetchAllPosAvaliationUseCase = new FetchAllPosAvaliationUseCase(repository)
    const fetchAllPosAvaliationController = new FetchAllPosAvaliationController(fetchAllPosAvaliationUseCase)

    return { fetchAllPosAvaliationController }
}