export interface TerminalEntity {
  _id: string
  props: {
    id_terminal: string
    serial: string
    sim_card: string
  }
}

export interface RegisterTerminalRequestDTO {
    serial: string
    sim_card: string
    agent_id: string
}
