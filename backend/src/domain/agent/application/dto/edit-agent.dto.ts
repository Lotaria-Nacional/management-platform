import { Agent } from "@/domain/agent/enterprise/entities/agent.entity";

export interface IEditAgentRequest {
  id:string
  agent_id?:string 
  name?:string
  lastname?:string
  phone_number?:string
  afrimoney?:string | null
  zone?:string
  area?:string
  province?:string
  city?:string
  status?:string
  terminal_id?:number | null
}

export interface IEditAgentResponse {
  agents: Agent[];
}