import { ITerminalRepository } from "../interfaces/terminal-repository.interface"
import { IGetTerminalByIdRequestDTO, IGetTerminalByIdResponseDTO } from "../dto/get-terminal-by-id.dto"

export class GetTerminalByIdUseCase {
  constructor(private terminalRepository: ITerminalRepository) {}

  async execute({ id }:IGetTerminalByIdRequestDTO): Promise<IGetTerminalByIdResponseDTO> {
    const terminal = await this.terminalRepository.getById(id)

    if(!terminal) {
      throw new Error("Terminal not found.")
    }

    return { terminal }
  }
}
