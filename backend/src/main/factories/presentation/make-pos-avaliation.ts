import { IPosAvaliationRepository } from "@/domain/pos/application/interfaces/pos-avaliation-repository.interface"
import { SubmitPosAvaliationUseCase } from "@/domain/pos/application/use-cases/pos-avaliation/submit-pos-avaliation.useCase"
import { FetchAllPosAvaliationUseCase } from "@/domain/pos/application/use-cases/pos-avaliation/fetch-all-pos-avaliation.useCase"
import { SubmitPosAvaliationController } from "@/domain/pos/presentation/controllers/pos-avaliation/submit-pos-avaliation.controller"
import { FetchAllPosAvaliationController } from "@/domain/pos/presentation/controllers/pos-avaliation/fetch-all-pos-avaliation.controller"

export class MakePosAvaliationController {

    constructor(private repository:IPosAvaliationRepository){}

    fetchAvaliationPos(){
        const useCase = new FetchAllPosAvaliationUseCase(this.repository)
        const fetchAllPosAvaliationController = new FetchAllPosAvaliationController(useCase)
    
        return { fetchAllPosAvaliationController }
    }

    submitAvaliationPos(){
        const useCase = new SubmitPosAvaliationUseCase(this.repository)
        const submitPosAvaliationController = new SubmitPosAvaliationController(useCase)

        return { submitPosAvaliationController }
    }
}