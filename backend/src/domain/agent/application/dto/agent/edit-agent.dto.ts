import { Agent } from "@/domain/agent/enterprise/entities/agent.entity";

export interface IEditAgentRequestDTO {
  id:string
  agent_id?:string 
  name?:string
  lastname?:string
  phone_number?:string
  afrimoney?:string | null
  zone?:string
  province?:string
  city?:string
  status?:string
  terminal_id?:number | null
}

export interface IEditAgentResponseDTO {
  agent: Agent;
}