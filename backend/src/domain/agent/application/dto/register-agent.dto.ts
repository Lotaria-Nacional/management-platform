import { Agent } from "@/domain/agent/enterprise/entities/agent.entity"

export interface IRegisterAgentRequestDTO {
    // agent_id?:string 
    name:string
    lastname:string
    phone_number:string
    afrimoney:string
    zone:string
    area:string
    province:string
    city:string
    status:string
    terminal_id:string
}

export interface IRegisterAgentResponseDTO {
    agent:Agent
}