import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"

export interface IRegisterAgentRequestDTO {
  first_name: string
  last_name: string
  phone: string
  afrimoney: string
  zone: string
  province: string
  city: string
  status: string
  terminal_id: string
}

export interface IRegisterAgentResponseDTO {
  agent: Agent
}
