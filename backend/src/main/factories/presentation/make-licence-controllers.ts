import { ILicenceRepository } from "@/domain/pos/application/interfaces/licence-repository.interface"
import { AddLicenceUseCase } from "@/domain/pos/application/use-cases/licence/add-licence.useCase"
import { EditLicenceUseCase } from "@/domain/pos/application/use-cases/licence/edit-licence.useCase"
import { FetchManyLicencesUseCase } from "@/domain/pos/application/use-cases/licence/fetch-many-licences.useCase"
import { GetLicenceByIdUseCase } from "@/domain/pos/application/use-cases/licence/get-licence-by-id.useCase"
import { RemoveLicenceUseCase } from "@/domain/pos/application/use-cases/licence/remove-licence.useCase"
import { AddLicenceController } from "@/domain/pos/presentation/controllers/licence/add-licence.controller"
import { EditLicenceController } from "@/domain/pos/presentation/controllers/licence/edit-licence.controller"
import { FetchManyLicenceController } from "@/domain/pos/presentation/controllers/licence/fetch-many-licence.controller"
import { GetLicenceByIdController } from "@/domain/pos/presentation/controllers/licence/get-licence-by-id.controller"
import { RemoveLicenceController } from "@/domain/pos/presentation/controllers/licence/remove-licence.controller"

export function makeLicenceControllers(repository: ILicenceRepository) {
  const addLicenceController = new AddLicenceController(
    new AddLicenceUseCase(repository)
  )

  const editLicenceController = new EditLicenceController(
    new EditLicenceUseCase(repository)
  )

  const fetchManyLicencesController = new FetchManyLicenceController(
    new FetchManyLicencesUseCase(repository)
  )

  const getLicenceByIdController = new GetLicenceByIdController(
    new GetLicenceByIdUseCase(repository)
  )

  const removeLicenceController = new RemoveLicenceController(
    new RemoveLicenceUseCase(repository)
  )

  return {
    addLicenceController,
    editLicenceController,
    fetchManyLicencesController,
    getLicenceByIdController,
    removeLicenceController,
  }
}
