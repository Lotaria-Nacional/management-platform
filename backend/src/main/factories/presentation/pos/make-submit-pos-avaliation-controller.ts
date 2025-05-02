import { IPosAvaliationRepository } from "@/domain/pos/application/interfaces/pos-avaliation-repository.interface";
import { SubmitPosAvaliationUseCase } from "@/domain/pos/application/use-cases/pos-avaliation/submit-pos-avaliation.useCase";
import { SubmitPosAvaliationController } from "@/domain/pos/presentation/controllers/pos-avaliation/submit-pos-avaliation.controller";

export function makeSubmitPosAvaliationController(repository:IPosAvaliationRepository) {
    const submitPosAvaliationUseCase = new SubmitPosAvaliationUseCase(repository)
    const submitPosAvaliationController = new SubmitPosAvaliationController(submitPosAvaliationUseCase)

    return { submitPosAvaliationController }
}