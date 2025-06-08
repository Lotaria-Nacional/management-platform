import { ITerminalRepository } from "@/domain/terminal/application/interfaces/terminal-repository.interface"
import { AddTerminalUseCase } from "@/domain/terminal/application/use-cases/add-terminal.useCase"
import { AddTerminalController } from "@/domain/terminal/presentation/controllers/add-terminal.controller"
import { RemoveTerminalUseCase } from "@/domain/terminal/application/use-cases/remove-terminal.useCase"
import { RemoveTerminalController } from "@/domain/terminal/presentation/controllers/remove-terminal.controller"
import { GetTerminalByIdUseCase } from "@/domain/terminal/application/use-cases/get-terminal-by-id.useCase"
import { EditTerminalController } from "@/domain/terminal/presentation/controllers/edit-terminal.controller"
import { EditTerminalUseCase } from "@/domain/terminal/application/use-cases/edit-terminal.useCase"
import { FetchManyTerminalsController } from "@/domain/terminal/presentation/controllers/fetch-terminal.controller"
import { FetchManyTerminalsUseCase } from "@/domain/terminal/application/use-cases/fetch-many-terminals.useCase"
import { GetTerminalByIdController } from "@/domain/terminal/presentation/controllers/get-terminal-by-id.controller"

export function makeTerminalControllers(repository: ITerminalRepository) {
  const addTerminalController = new AddTerminalController(
    new AddTerminalUseCase(repository)
  )

  const editTerminalController = new EditTerminalController(
    new EditTerminalUseCase(repository)
  )

  const removeTerminalController = new RemoveTerminalController(
    new RemoveTerminalUseCase(repository)
  )

  const getTerminalByIdController = new GetTerminalByIdController(
    new GetTerminalByIdUseCase(repository)
  )

  const fetchManyTerminalsController = new FetchManyTerminalsController(
    new FetchManyTerminalsUseCase(repository)
  )

  return {
    addTerminalController,
    editTerminalController,
    removeTerminalController,
    getTerminalByIdController,
    fetchManyTerminalsController,
  }
}
