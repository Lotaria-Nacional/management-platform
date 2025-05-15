import { Agent } from "@/domain/agent/enterprise/entities/agent.entity";

export interface IUploadAgentUseCaseRequestDTO {
  buffer: Buffer;
}

export interface IUploadAgentUseCaseResponseDTO {
  agents: Agent[];
}