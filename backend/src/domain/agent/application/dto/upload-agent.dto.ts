import { Agent } from "../../enterprise/entities/agent.entity";

export interface UploadAgentUseCaseRequest {
  buffer: Buffer;
}

export interface UploadAgentUseCaseResponse {
  agents: Agent[];
}