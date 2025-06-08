import { IRevisionRepository } from "@/domain/agent/application/interfaces/revision-repository.interface"
import { MakeRevisionUseCase } from "@/domain/agent/application/use-cases/revision/make-revision.useCase"
import { MakeRevisionController } from "@/domain/agent/presentation/controllers/revision/make-revision.controller"
import { FetchManyRevisionsUseCase } from "@/domain/agent/application/use-cases/revision/fetch-many-revisions.useCase"
import { FetchManyRevisionsController } from "@/domain/agent/presentation/controllers/revision/fetch-many-revisions.controller"
import { RemoveRevisionController } from "@/domain/agent/presentation/controllers/revision/remove-revision.controller"
import { RemoveRevisionUseCase } from "@/domain/agent/application/use-cases/revision/remove-revision.useCase"
import { GetRevisionByIdUseCase } from "@/domain/agent/application/use-cases/revision/get-revision-by-id.useCase"
import { GetRevisionByIdController } from "@/domain/agent/presentation/controllers/revision/get-revision-by-id.controller"

export function makeRevisionControllers(repository: IRevisionRepository) {
  const makeRevisionController = new MakeRevisionController(
    new MakeRevisionUseCase(repository)
  )

  const fetchManyRevisionsController = new FetchManyRevisionsController(
    new FetchManyRevisionsUseCase(repository)
  )

  const removeRevisionController = new RemoveRevisionController(
    new RemoveRevisionUseCase(repository)
  )

  const getRevisionByIdController = new GetRevisionByIdController(
    new GetRevisionByIdUseCase(repository)
  )

  return {
    makeRevisionController,
    fetchManyRevisionsController,
    removeRevisionController,
    getRevisionByIdController,
  }
}
