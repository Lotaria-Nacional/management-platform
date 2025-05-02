export interface Terminal {
  _id: string
  props: {
    id_terminal: string
    serial: string
    sim_card: string
  }
}

export interface TerminalRequestDTO {
  file: File
}
