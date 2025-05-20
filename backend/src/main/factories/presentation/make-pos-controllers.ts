import { IPosRepository } from "@/domain/pos/application/interfaces/pos-repository.interface"
import { AddPosUseCase } from "@/domain/pos/application/use-cases/add-pos.useCase"
import { EditPosUseCase } from "@/domain/pos/application/use-cases/edit-pos.useCase"
import { FetchManyPosUseCase } from "@/domain/pos/application/use-cases/fetch-many-pos.useCase"
import { GetPosByIdUseCase } from "@/domain/pos/application/use-cases/get-pos-by-id.useCase"
import { RemovePosUseCase } from "@/domain/pos/application/use-cases/remove-pos.useCase"
import { AddPosController } from "@/domain/pos/presentation/controllers/add-pos.controller"
import { EditPosController } from "@/domain/pos/presentation/controllers/edit-pos.controller"
import { FetchManyPosController } from "@/domain/pos/presentation/controllers/fetch-many-pos.controller"
import { GetPosByIdController } from "@/domain/pos/presentation/controllers/get-pos-by-id.controller"
import { RemovePosController } from "@/domain/pos/presentation/controllers/remove-pos.controller"


export function makePosControllers(repository: IPosRepository) {
  
    const addPosController = new AddPosController(
    new AddPosUseCase(repository)
  )

  const editPosController = new EditPosController(
    new EditPosUseCase(repository)
  )

  const fetchManyPosController = new FetchManyPosController(
    new FetchManyPosUseCase(repository)
  )

  const getPosByIdController = new GetPosByIdController(
    new GetPosByIdUseCase(repository)
  )

  const removePosController = new RemovePosController(
    new RemovePosUseCase(repository)
  )


  return {
    addPosController,
    editPosController,
    fetchManyPosController,
    getPosByIdController,
    removePosController
  }
}
