import { Agent } from "../../enterprise/entities/agent.entity";

export interface IUploadAgentUseCaseRequest {
  buffer: Buffer;
}

export interface IUploadAgentUseCaseResponse {
  agents: Agent[];
}