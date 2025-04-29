import { parseXlsx } from "@/shared/utils/parse-xlsx";
import { XlsxAgentMapper } from "../mapper/xlsx-agent.mapper";
import { IAgentRepository } from "@/domain/agent/application/interfaces/agent-repository.interface";
import { UploadAgentUseCaseRequest,UploadAgentUseCaseResponse } from "../dto/upload-agent.dto";

export class UploadAgentUseCase {
  constructor(private agentRepository: IAgentRepository) {}

  async execute(data: UploadAgentUseCaseRequest): Promise<UploadAgentUseCaseResponse> {
    const rawData = parseXlsx({ buffer: data.buffer });
    
    const agents = XlsxAgentMapper.toAgents(rawData)

    await this.agentRepository.saveMany(agents);

    return { agents }
  }
}
