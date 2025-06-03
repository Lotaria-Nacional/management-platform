export interface RevisionEntity {
  id: string
  additional_info?: string
  agent_id: string
  image: string
  items: Record<string, boolean>
  agent: {
    id: string
    first_name: string
    last_name: string
  }
}

export interface IMakeAgentRevisionRequestDTO {
  agent_id: string
  additional_info?: string
  image: string
  items: {
    guarda_sol: boolean
    terminal: boolean
    cavalete: boolean
    mesa: boolean
    marcador: boolean
    internet: boolean
  }
}
