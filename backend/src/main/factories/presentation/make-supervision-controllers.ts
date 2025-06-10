import { ISupervisionRepository } from "@/domain/agent/application/interfaces/supervision-repository.interface"
import { MakeSupervisionUseCase } from "@/domain/agent/application/use-cases/supervision/make-supervision.useCase"
import { FetchManySupervisionUseCase } from "@/domain/agent/application/use-cases/supervision/fetch-many-supervision.useCase"
import { FetchManySupervisionController } from "@/domain/agent/presentation/controllers/supervision/fetch-many-supervision.controller"
import { RemoveSupervisionUseCase } from "@/domain/agent/application/use-cases/supervision/remove-supervision.useCase"
import { GetSupervisionByIdUseCase } from "@/domain/agent/application/use-cases/supervision/get-supervision-by-id.useCase"
import { GetSupervisionByIdController } from "@/domain/agent/presentation/controllers/supervision/get-supervision-by-id.controller"
import { MakeSupervisionController } from "@/domain/agent/presentation/controllers/supervision/make-supervision.controller"
import { RemoveSupervisionController } from "@/domain/agent/presentation/controllers/supervision/remove-supervision.controller"

export function makeSupervisionControllers(repository: ISupervisionRepository) {
  const makeSupervisionController = new MakeSupervisionController(
    new MakeSupervisionUseCase(repository)
  )

  const fetchManySupervisionController = new FetchManySupervisionController(
    new FetchManySupervisionUseCase(repository)
  )

  const removeSupervisionController = new RemoveSupervisionController(
    new RemoveSupervisionUseCase(repository)
  )

  const getSupervisionByIdController = new GetSupervisionByIdController(
    new GetSupervisionByIdUseCase(repository)
  )

  return {
    makeSupervisionController,
    fetchManySupervisionController,
    removeSupervisionController,
    getSupervisionByIdController,
  }
}
