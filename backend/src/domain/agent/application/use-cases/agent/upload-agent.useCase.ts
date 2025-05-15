import { parseXlsx } from "@/shared/utils/parse-xlsx";
import { XlsxAgentMapper } from "../../mapper/xlsx-agent.mapper";
import { IAgentRepository } from "../../interfaces/agent-repository.interface";
import { IUploadAgentUseCaseRequestDTO, IUploadAgentUseCaseResponseDTO } from "../../dto/agent/upload-agent.dto";

export class UploadAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute(data: IUploadAgentUseCaseRequestDTO): Promise<IUploadAgentUseCaseResponseDTO> {
    const rawData = parseXlsx({ buffer: data.buffer });
    
    const agents = XlsxAgentMapper.toAgents(rawData)

    await this.agentRepository.saveMany(agents);

    return { agents }
  }
}
