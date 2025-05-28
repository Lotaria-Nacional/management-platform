import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"

export interface IEditAgentRequestDTO {
  id: string
  agent_id?: string
  first_name: string
  last_name: string
  phone?: string
  afrimoney?: string | null
  zone?: string
  province?: string
  city?: string
  status?: string
  pos_id?: string | null
}

export interface IEditAgentResponseDTO {
  agent: Agent
}
