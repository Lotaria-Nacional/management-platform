import { RevisionEntity } from "../revision/types"

export interface AgentEntity {
    id: string
    agent_id: string
    afrimoney: string
    city: string
    first_name: string
    last_name: string
    phone: string
    province: string
    status: string
    zone: string
    revision?:RevisionEntity | null
}

export interface EditAgentRequestDTO extends Partial<AgentEntity>{ id: string}

export interface RegisterAgentRequestDTO extends Omit<AgentEntity,"id"> {}
